$ErrorActionPreference = "Stop"
Set-StrictMode -Version Latest

function Write-Step {
  param([string]$Message)
  Write-Host "==> $Message" -ForegroundColor Cyan
}

function Fail {
  param([string]$Message)
  Write-Error $Message
  exit 1
}

function Get-ChangeLabel {
  param([string]$StatusCode)

  switch -Regex ($StatusCode) {
    "^A" { return "Added" }
    "^M" { return "Modified" }
    "^D" { return "Deleted" }
    "^R" { return "Renamed" }
    "^C" { return "Copied" }
    default { return "Updated" }
  }
}

$repoRoot = (git rev-parse --show-toplevel 2>$null)
if (-not $repoRoot) {
  Fail "This script must be run inside a Git repository."
}

Set-Location $repoRoot.Trim()

$currentBranch = (git branch --show-current).Trim()
if ($currentBranch -ne "main") {
  Fail "Current branch is '$currentBranch'. Switch to 'main' before running commit.ps1."
}

do {
  $commitMessage = Read-Host "Commit message"

  if ([string]::IsNullOrWhiteSpace($commitMessage)) {
    Write-Host "Please enter a non-empty commit message." -ForegroundColor Yellow
  }
} while ([string]::IsNullOrWhiteSpace($commitMessage))

$statusLines = @(git status --short)
if ($LASTEXITCODE -ne 0) {
  Fail "Unable to read the repository status."
}

if ($statusLines.Count -eq 0) {
  Write-Host "Nothing to commit on 'main'." -ForegroundColor Yellow
  exit 0
}

Write-Step "Staging changes"
git add -A
if ($LASTEXITCODE -ne 0) {
  Fail "Failed to stage the current changes."
}

$stagedChanges = @(git diff --cached --name-status --find-renames)
if ($LASTEXITCODE -ne 0 -or $stagedChanges.Count -eq 0) {
  Fail "No staged changes were found after running git add."
}

Write-Step "Creating commit"
git commit -m $commitMessage
if ($LASTEXITCODE -ne 0) {
  Fail "The commit did not complete successfully."
}

Write-Step "Rebasing onto origin/main"
git pull --rebase origin main
if ($LASTEXITCODE -ne 0) {
  Fail "Rebase failed. Resolve conflicts, run 'git rebase --continue', and push again."
}

Write-Step "Pushing to origin/main"
git push origin HEAD:main
if ($LASTEXITCODE -ne 0) {
  Fail "Push failed. Check the remote state and try again."
}

$commitHash = (git rev-parse --short HEAD).Trim()

Write-Host ""
Write-Host "Commit recap" -ForegroundColor Green
Write-Host "Commit: $commitHash"
Write-Host "Message: $commitMessage"
Write-Host "Files:"

foreach ($change in $stagedChanges) {
  $parts = $change -split "`t"
  $label = Get-ChangeLabel -StatusCode $parts[0]

  if ($parts[0] -match "^R" -and $parts.Count -ge 3) {
    Write-Host " - ${label}: $($parts[1]) -> $($parts[2])"
    continue
  }

  $path = $parts[-1]
  Write-Host " - ${label}: $path"
}
