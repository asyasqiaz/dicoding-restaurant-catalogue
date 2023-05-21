class FooterSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <footer>
                <p>&copy; 2023 — Dreamy Meal</p>
            </footer>
        `;
  }
}

customElements.define('footer-section', FooterSection);
