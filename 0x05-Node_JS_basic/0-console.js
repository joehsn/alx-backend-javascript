const process = require("process");
/**
 * A function that prints in STDOUT the string argument.
 * @param {String} msg
 * @param {void}
 */

function displayMessage(msg) {
    process.stdout.write(msg + "\n");
};

module.exports = displayMessage;
