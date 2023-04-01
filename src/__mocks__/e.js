class E {
  defaultPrevented = false;

  preventDefault() {
    this.defaultPrevented = true;
  }
}

const e = new E();

module.exports = e;