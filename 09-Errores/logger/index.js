const winston = require("winston");

const logger = winston.createLogger({
    level: "debug",
    format: winston.format.json(),
    // se puede utilizar otros formatos tambien no solo json
    // defaultMeta: { service: "user-service" },
    transports: [    
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "combined.log" }),
    new winston.transports.Console(),
    ],
});

module.exports = logger;
// The logger object is exported to be used in other files.
