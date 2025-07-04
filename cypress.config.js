const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "d66a2q",
  viewportHeight: 880,
  viewportWidth: 1280,
  e2e: {},
})

/* Forato mobile
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 410,
  viewportHeight: 860,
  e2e: {}},
}) */