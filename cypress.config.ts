import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1000,
  viewportHeight: 660,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
