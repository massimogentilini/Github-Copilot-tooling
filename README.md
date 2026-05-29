# GitHub Copilot Tooling

Static GitHub Pages site for collecting useful GitHub Copilot links.

## Structure

- `index.html` - the page shell
- `assets/css/styles.css` - shared styling
- `assets/js/site-data.js` - all sections and cards
- `assets/js/app.js` - renders the site from the data file

## Content maintenance

To add a new section or card, edit `assets/js/site-data.js`.

- Add a new section object to `sections`
- Add new card objects to a section's `items` array

The page navigation, section counts, and cards are generated automatically from that file.

## GitHub Pages

This site has no build step. Publish it directly from the repository root with GitHub Pages.

## Commit helper

Run `.\commit.ps1` from the repository root to:

- ask for a commit message
- stage all current changes
- commit on `main`
- rebase on top of `origin/main`
- push to `origin/main`
- print a short recap of the committed files
