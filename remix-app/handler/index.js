const { installGlobals } = require("@remix-run/node");
const { createRequestHandler } = require("./remix-azure-functions-adapter");

installGlobals();

module.exports = createRequestHandler({
  build: require("../build"),
});
