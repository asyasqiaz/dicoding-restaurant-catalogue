class HeroSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <section id="hero" class="hero">
                <div class="hero-inner-content">
                    <h1 class="hero-title">Good Food, Good Mood</h1>
                    <p class="hero-tagline">Find hundreds of flavors under one roof</p>
                </div>
            </section>
        `;
  }
}

customElements.define('hero-section', HeroSection);
