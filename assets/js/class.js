class Comic {
  constructor(name, species, image) {
    this._name = () => name;
    this._species = () => species;
    this._image = () => image;
  }

  get name() {
    return this._name();
  }
  get species() {
    return this._species();
  }
  get image() {
    return this._image();
  }

  show() {
    cards.innerHTML += `<article class="card text-center shadow col-12 col-md-6 col-lg-3 mt-2">
          <img src="${this.image}" class="card-img-top" alt="${this.name}">
          <div class="card-body">
          <h3 class="card-text">${this.name}</h3>
          <p class="card-text">${this.species}</p>
          </div>
          </article>
          `;
  }
}
export default Comic;
