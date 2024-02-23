const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.zenithbank.com/',
    "defaultCommandTimeout": 8000,
    "pageLoadTimeout": 80000,
  
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },//
  },
});
