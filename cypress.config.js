const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: "https://staging-marketeq-projects.vercel.app/",

    //explicitly enable video, screenshots are taken by default on fails
    video: true,
    videosFolder: 'cypress/videos',

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
