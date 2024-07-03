import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:57095',

    // Define where your tests are located
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',

    // Enable or disable video recording
    video: true,

    // Setup browser options, can be used to configure Chromium-based browsers
    setupNodeEvents(on, config) {

    },

    // Configure viewport settings
    viewportWidth: 1280,
    viewportHeight: 720
  },

  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.cy.ts",
  },
});
