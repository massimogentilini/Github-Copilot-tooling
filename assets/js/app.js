(function () {
  const data = window.copilotResourceHub;
  const palette = [
    "rgba(56, 189, 248, 0.7)",
    "rgba(52, 211, 153, 0.75)",
    "rgba(244, 114, 182, 0.72)",
    "rgba(251, 191, 36, 0.72)",
  ];

  const dom = {
    sectionNav: document.getElementById("section-nav"),
    sectionsRoot: document.getElementById("sections-root"),
    siteDescription: document.getElementById("site-description"),
    sectionCount: document.getElementById("section-count"),
    cardCount: document.getElementById("card-count"),
    linkCount: document.getElementById("link-count"),
    modal: document.getElementById("card-modal"),
    modalClose: document.getElementById("modal-close"),
    modalCategory: document.getElementById("modal-category"),
    modalTitle: document.getElementById("modal-title"),
    modalSummary: document.getElementById("modal-summary"),
    modalDescription: document.getElementById("modal-description"),
    modalTags: document.getElementById("modal-tags"),
    modalHighlights: document.getElementById("modal-highlights"),
    modalLinks: document.getElementById("modal-links"),
  };

  if (!data || !Array.isArray(data.sections) || data.sections.length === 0) {
    dom.sectionsRoot.innerHTML =
      '<section class="content-section"><div class="section-header"><div><p class="section-kicker">Missing data</p><h2>No cards available</h2><p class="section-description">Add sections to <code>assets/js/site-data.js</code> to populate the site.</p></div></div></section>';
    return;
  }

  let activeTrigger = null;

  dom.siteDescription.textContent = data.site?.description || "";
  dom.sectionCount.textContent = String(data.sections.length);
  dom.cardCount.textContent = String(
    data.sections.reduce((total, section) => total + section.items.length, 0),
  );
  dom.linkCount.textContent = String(
    data.sections.reduce(
      (total, section) =>
        total + section.items.reduce((itemTotal, item) => itemTotal + (item.links || []).length, 0),
      0,
    ),
  );

  renderNavigation();
  renderSections();
  wireModal();

  function renderNavigation() {
    const fragment = document.createDocumentFragment();

    data.sections.forEach((section) => {
      const link = makeElement("a", "section-link", section.title);
      link.href = `#${section.id}`;
      fragment.appendChild(link);
    });

    dom.sectionNav.replaceChildren(fragment);
  }

  function renderSections() {
    const fragment = document.createDocumentFragment();

    data.sections.forEach((section, index) => {
      const sectionElement = makeElement("section", "content-section");
      sectionElement.id = section.id;
      sectionElement.style.setProperty("--section-accent", section.color || palette[index % palette.length]);

      const header = makeElement("div", "section-header");
      const headerCopy = makeElement("div");
      const kicker = makeElement("p", "section-kicker", section.kicker);
      const title = makeElement("h2", "", section.title);
      const description = makeElement("p", "section-description", section.description);
      const count = makeElement(
        "span",
        "section-count",
        `${section.items.length} card${section.items.length === 1 ? "" : "s"}`,
      );

      headerCopy.append(kicker, title, description);
      header.append(headerCopy, count);

      const grid = makeElement("div", "card-grid");
      section.items.forEach((item) => {
        grid.appendChild(createSummaryCard(item));
      });

      sectionElement.append(header, grid);
      fragment.appendChild(sectionElement);
    });

    dom.sectionsRoot.replaceChildren(fragment);
  }

  function createSummaryCard(item) {
    const card = makeElement("button", "summary-card");
    card.type = "button";
    card.dataset.itemId = item.id;

    const header = makeElement("div", "card-header");
    const kind = makeElement("span", "card-kind", item.category);
    const jump = makeElement("span", "card-jump", "Full card →");

    const title = makeElement("h3", "", item.name);
    const summary = makeElement("p", "", item.summary);
    const tagList = makeElement("div", "tag-list");
    (item.tags || []).forEach((tag) => tagList.appendChild(makeElement("span", "tag", tag)));
    const action = makeElement("span", "card-action", "Click to open details");

    header.append(kind, jump);
    card.append(header, title, summary, tagList, action);

    card.addEventListener("click", () => openModal(item, card));
    return card;
  }

  function wireModal() {
    dom.modalClose.addEventListener("click", closeModal);
    dom.modal.addEventListener("click", (event) => {
      if (event.target === dom.modal) {
        closeModal();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !dom.modal.hidden) {
        closeModal();
      }
    });
  }

  function openModal(item, trigger) {
    activeTrigger = trigger;

    dom.modalCategory.textContent = item.category;
    dom.modalTitle.textContent = item.name;
    dom.modalSummary.textContent = item.summary;
    dom.modalDescription.textContent = item.description;

    dom.modalTags.replaceChildren(
      ...(item.tags || []).map((tag) => makeElement("span", "tag", tag)),
    );

    dom.modalHighlights.replaceChildren(
      ...(item.highlights || []).map((highlight) => makeElement("li", "", highlight)),
    );

    dom.modalLinks.replaceChildren(
      ...(item.links || []).map((link, index) => {
        const anchor = makeElement(
          "a",
          `button-link ${index === 0 ? "primary" : "secondary"}`,
          link.label,
        );
        anchor.href = link.url;
        anchor.target = "_blank";
        anchor.rel = "noopener noreferrer";
        return anchor;
      }),
    );

    dom.modal.hidden = false;
    document.body.classList.add("modal-open");
    dom.modalClose.focus();
  }

  function closeModal() {
    dom.modal.hidden = true;
    document.body.classList.remove("modal-open");

    if (activeTrigger instanceof HTMLElement) {
      activeTrigger.focus();
    }
  }

  function makeElement(tagName, className, text) {
    const element = document.createElement(tagName);
    if (className) {
      element.className = className;
    }
    if (typeof text === "string") {
      element.textContent = text;
    }
    return element;
  }
})();
