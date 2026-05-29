window.copilotResourceHub = {
  site: {
    description:
      "A curated directory of links that help teams learn GitHub Copilot, keep prompts lean, and discover useful MCP servers without adding a build step.",
  },
  // Add a new section by pushing another object into this array.
  // Add a new card by appending an item to a section's `items` array.
  sections: [
    {
      id: "tools",
      title: "Tools",
      kicker: "Daily workflow",
      description:
        "General-purpose resources and companion sites that are useful when you work with GitHub Copilot every day.",
      color: "rgba(56, 189, 248, 0.7)",
      items: [
        {
          id: "github-copilot-docs",
          name: "GitHub Copilot Docs",
          category: "Official documentation",
          summary:
            "The quickest way to confirm features, rollout details, setup steps, and platform support.",
          description:
            "GitHub's official Copilot documentation is the anchor resource for chat, coding agent flows, policies, billing, IDE setup, and enterprise administration.",
          tags: ["Reference", "Setup", "Official"],
          highlights: [
            "Use it to confirm feature availability before you change workflows or team guidance.",
            "Covers end-user setup as well as organization and enterprise rollout concerns.",
            "A good first stop when you need authoritative answers instead of community summaries.",
          ],
          links: [
            { label: "Open docs", url: "https://docs.github.com/en/copilot" },
            { label: "Copilot feature page", url: "https://github.com/features/copilot" },
          ],
        },
        {
          id: "github-models",
          name: "GitHub Models",
          category: "Prompt and model testing",
          summary:
            "A practical place to compare prompts and models before you bake them into your Copilot workflow.",
          description:
            "GitHub Models is useful when you want a controlled space for prompt experiments, evaluation, and model comparisons without leaving the GitHub ecosystem.",
          tags: ["Prompting", "Models", "Evaluation"],
          highlights: [
            "Helpful for side-by-side model evaluation when you are shaping reusable prompts.",
            "Lets you refine prompts before using similar patterns in Copilot Chat or agent workflows.",
            "Useful for teams that want a shared place to discuss prompt quality and output style.",
          ],
          links: [{ label: "Open GitHub Models", url: "https://github.com/features/models" }],
        },
        {
          id: "vscode-copilot-docs",
          name: "VS Code Copilot Docs",
          category: "IDE-specific guide",
          summary:
            "Best when your daily Copilot workflow lives inside VS Code and you want editor-native guidance.",
          description:
            "The VS Code documentation focuses on how Copilot behaves inside the editor, including chat, completions, setup, and workflow-specific UX details.",
          tags: ["VS Code", "IDE", "Hands-on"],
          highlights: [
            "Clarifies editor-specific features, commands, and configuration options.",
            "Useful for onboarding teammates who are working mainly in VS Code.",
            "Complements the broader GitHub docs with product-specific behavior and examples.",
          ],
          links: [
            { label: "Open VS Code docs", url: "https://code.visualstudio.com/docs/copilot/overview" },
          ],
        },
        {
          id: "github-skills",
          name: "GitHub Skills",
          category: "Interactive learning",
          summary:
            "Short, practical exercises that help people get productive with GitHub and adjacent AI workflows faster.",
          description:
            "GitHub Skills offers guided, repository-based exercises that work well for self-learning, lightweight enablement, or internal onboarding programs.",
          tags: ["Learning", "Onboarding", "Exercises"],
          highlights: [
            "Useful when you want structured learning instead of free-form exploration.",
            "Works well for onboarding new team members to GitHub-centric workflows.",
            "Good companion material for people adopting Copilot alongside broader GitHub tooling.",
          ],
          links: [{ label: "Open GitHub Skills", url: "https://skills.github.com" }],
        },
      ],
    },
    {
      id: "token-saving",
      title: "Token Saving",
      kicker: "Lean context",
      description:
        "Sites that help you compress, summarize, or target the context you feed into Copilot so prompts stay tighter and cheaper.",
      color: "rgba(52, 211, 153, 0.75)",
      items: [
        {
          id: "deepwiki",
          name: "DeepWiki",
          category: "Repository summarization",
          summary:
            "Creates a faster high-level understanding of a repository before you start dumping files into a prompt.",
          description:
            "DeepWiki is helpful when you want a quick mental model of a codebase, key modules, and architecture without reading everything line by line.",
          tags: ["Repos", "Summaries", "Architecture"],
          highlights: [
            "Helps you brief Copilot with cleaner architecture-level context instead of large raw file dumps.",
            "Useful for unfamiliar repositories where you first need a map before asking for changes.",
            "Can reduce prompt size by replacing repeated code excerpts with a concise overview.",
          ],
          links: [{ label: "Open DeepWiki", url: "https://deepwiki.com" }],
        },
        {
          id: "context7",
          name: "Context7",
          category: "Up-to-date library docs",
          summary:
            "Pulls focused documentation context so you can reference the right API details without pasting pages of docs.",
          description:
            "Context7 is especially useful when Copilot needs current framework or library documentation and you want to avoid noisy, oversized prompts.",
          tags: ["Docs", "Libraries", "Precision"],
          highlights: [
            "Keeps prompts short by bringing in the exact documentation slice you need.",
            "Reduces stale knowledge issues when you are working with rapidly changing frameworks.",
            "A strong fit for debugging or migration prompts tied to a specific package version.",
          ],
          links: [{ label: "Open Context7", url: "https://context7.com" }],
        },
        {
          id: "repomix",
          name: "Repomix",
          category: "AI-friendly repo packaging",
          summary:
            "Packages a repository into a cleaner, AI-oriented format so the important context is easier to select and reuse.",
          description:
            "Repomix helps you collect the right code context into a more model-friendly bundle, which is useful when you need to share or reuse repository context intentionally.",
          tags: ["Packaging", "Prompts", "Reuse"],
          highlights: [
            "Useful when you need a repeatable way to prepare project context for AI-assisted work.",
            "Can help reduce prompt noise by curating relevant files before they reach the model.",
            "Handy for cross-team sharing when everyone needs the same baseline repository context.",
          ],
          links: [{ label: "Open Repomix", url: "https://repomix.com" }],
        },
        {
          id: "gitdiagram",
          name: "GitDiagram",
          category: "Repo visualization",
          summary:
            "Turns repository structure into a visual map so you can describe the codebase with fewer words.",
          description:
            "GitDiagram helps you build a better mental model of folders, relationships, and architectural seams before you ask Copilot to change or explain code.",
          tags: ["Visualization", "Repos", "Discovery"],
          highlights: [
            "Useful when a picture of the repo can replace a long text explanation in your prompt.",
            "Helps you identify the likely files to involve before you start an AI-assisted task.",
            "A good tool for initial discovery when you want to stay concise but still specific.",
          ],
          links: [{ label: "Open GitDiagram", url: "https://gitdiagram.com" }],
        },
      ],
    },
    {
      id: "mcp-servers",
      title: "MCP Servers",
      kicker: "Extending context",
      description:
        "Helpful entry points when you want to understand, browse, or adopt MCP servers that expand what Copilot can reach.",
      color: "rgba(244, 114, 182, 0.72)",
      items: [
        {
          id: "model-context-protocol",
          name: "Model Context Protocol",
          category: "Official spec",
          summary:
            "Start here when you need to understand what MCP is, how it works, and what a server can expose.",
          description:
            "The official MCP site explains the protocol, core concepts, and implementation patterns, making it the best place to ground decisions before adopting servers.",
          tags: ["Specification", "Official", "Architecture"],
          highlights: [
            "Best first read when you are new to MCP or need to explain it to a team.",
            "Helps distinguish client, server, transport, and capability concepts clearly.",
            "Useful before evaluating servers so you understand what is standardized versus custom.",
          ],
          links: [{ label: "Open MCP docs", url: "https://modelcontextprotocol.io" }],
        },
        {
          id: "mcp-servers-repo",
          name: "MCP Servers Repository",
          category: "Reference implementations",
          summary:
            "A practical catalog of example and maintained servers you can study, run, or adapt.",
          description:
            "The official repository is useful when you want concrete server examples, supported integrations, and a starting point for your own implementations.",
          tags: ["Examples", "Reference", "Open source"],
          highlights: [
            "Shows real server implementations instead of only protocol documentation.",
            "Useful when you want to see naming, capability exposure, and transport patterns in practice.",
            "Good source material for deciding whether to adopt an existing server or build your own.",
          ],
          links: [
            { label: "Open servers repo", url: "https://github.com/modelcontextprotocol/servers" },
          ],
        },
        {
          id: "github-mcp-server",
          name: "GitHub MCP Server",
          category: "GitHub integration",
          summary:
            "Connects agents to GitHub-native data such as repositories, issues, pull requests, and code search.",
          description:
            "The GitHub MCP Server is especially relevant when your Copilot workflow depends on live GitHub context beyond the files already checked out locally.",
          tags: ["GitHub", "Repos", "Automation"],
          highlights: [
            "Useful for workflows that need repository metadata, pull requests, or issue context.",
            "Helps bridge local coding work with GitHub-hosted artifacts and collaboration data.",
            "A strong candidate when you want AI tooling to stay grounded in current repository state.",
          ],
          links: [
            { label: "Open GitHub MCP Server", url: "https://github.com/github/github-mcp-server" },
          ],
        },
        {
          id: "smithery",
          name: "Smithery",
          category: "Server discovery",
          summary:
            "A convenient directory for discovering and trying MCP servers without starting from raw search results.",
          description:
            "Smithery is useful when you want a faster way to browse available MCP servers, compare options, and find integrations aligned with your workflow.",
          tags: ["Discovery", "Catalog", "Integrations"],
          highlights: [
            "Saves time when you are exploring the MCP ecosystem for the first time.",
            "Makes it easier to compare categories of servers before you commit to one.",
            "Useful as a discovery layer when the official reference repo is not enough on its own.",
          ],
          links: [{ label: "Open Smithery", url: "https://smithery.ai" }],
        },
        {
          id: "mcp-so",
          name: "MCP.so",
          category: "Ecosystem directory",
          summary:
            "Another handy browsing surface for surveying MCP servers and spotting useful integrations quickly.",
          description:
            "MCP.so works well as a discovery companion when you want a broad view of what is available across the MCP ecosystem.",
          tags: ["Discovery", "Catalog", "Ecosystem"],
          highlights: [
            "Useful for quickly scanning available servers and categories.",
            "Helps you identify options you may want to investigate more deeply later.",
            "A lightweight way to stay aware of the growing MCP ecosystem around AI tooling.",
          ],
          links: [{ label: "Open MCP.so", url: "https://mcp.so" }],
        },
      ],
    },
  ],
};
