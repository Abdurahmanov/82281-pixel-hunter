export default class AbstractView {
  get template() {
    throw new Error(`You should provide a template`);
  }

  static addMarkup(template) {
    const mainBlock = document.getElementById(`main-block`);
    mainBlock.innerHTML = template;
  }

  render() {
    return AbstractView.addMarkup(this.template);
  }

  bind() {
  }

  get element() {
    if (!this._element) {
      this._element = this.render();
      this.bind();
    }
    return this._element;
  }
}
