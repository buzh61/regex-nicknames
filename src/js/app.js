export default class Validator {
  constructor(username) {
    this.username = username;
  }

  validateUsername() {
    const validateUser = /^[^\d_-][a-z]*\d{0,3}[-_]*[a-z]*[^\d_-]$/i;

    if (!validateUser.test(this.username)) {
      return false;
    }
    return true;
  }
}
