const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: "https://staging-marketeq-projects.vercel.app/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
