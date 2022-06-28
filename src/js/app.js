export default class Validator {
  constructor(username) {
    this.username = username;
  }

  validateUsername() {
    const validateNumbers = /\d{4,}/g
    const validateSymbols = /^[a-zA-Z0-9-_]*/g
    const validateString = /(^[0-9-_]|[0-9-_]$)/g

    if (validateNumbers.test(this.username)) {
      return false;
    } else if (validateSymbols.test(this.username)) {
      return false;
    } else if (validateString.test(this.username)) {
      return false;
    }
    return true;
  }
}
