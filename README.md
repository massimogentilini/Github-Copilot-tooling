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
