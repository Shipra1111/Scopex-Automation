const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      EMAIL: 'agarwalshipra19.10@gmail.com',
      PASSWORD: 'Qazxsw@123',
      BASE_URL: 'https://scopex.money/'
    },
    reporter: 'mochawesome', // Add mochawesome reporter
    reporterOptions: {
      reportDir: 'cypress/reports',  // Directory to save the report
      overwrite: true,  // Overwrite existing reports
      html: true,  // Generate an HTML report
      json: true   // Generate a JSON report
    }
  },
});


