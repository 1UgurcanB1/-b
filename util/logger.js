const { Signale } = require("signale");
const { sensitiveTerms } = require("./sensitivePattern");

// This is the base logger that all other logger instances are built on
const options = {
  stream: process.stdout,
  scope: "logger",
  logLevel: "info",
  types: {
    command: {
      badge: ">",
      color: "gray",
      label: "command",
      level: "info"
    },
    critical: {
      badge: "!!",
      color: "red",
      label: "critical",
      level: "info"
    }
  }
};

const logger = new Signale(options);
logger.addSecrets(sensitiveTerms);

logger.start("Custom Signale logger started");

module.exports = logger;