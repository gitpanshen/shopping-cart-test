module.exports = class AdminPage {
  constructor(page, config) {
    this.page = page;
    this.config = config;
  }

  async go() {
    await this.page.goto(`${this.config.baseURL}admin`);
  }
};
