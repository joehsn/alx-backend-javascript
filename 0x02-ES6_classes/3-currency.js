export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') {
      throw new Error('TypeError: Code must be a string');
    }
    if (typeof name !== 'string') {
      throw new Error('TypeError: Name must be a string');
    }
    this._code = code;
    this._name = name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
