const { defineConfig } = require("cypress");
const { lighthouse } = require("cypress-audit");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        lighthouse: lighthouse(),
      });
    },
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: true,
      json: true,
    },
  },
});
