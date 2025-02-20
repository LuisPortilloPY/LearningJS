// libreria winston
// npm install winston
const logger = require("./logger");

// logger.log("hola estas saliendo por pantalla");
logger.info("texto informativo");
logger.warn("texto de advertencia");
logger.error("esto es un errror");
logger.debug("esto es un debug");
