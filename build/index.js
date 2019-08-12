const $_lib = require('./lib');

/**
 * Directly exported method.
 * @param {string} name The name of the method.
 */
const secondaryAPI = (name) => {
  console.log(name)
}

module.exports = $_lib
module.exports.secondaryAPI = secondaryAPI