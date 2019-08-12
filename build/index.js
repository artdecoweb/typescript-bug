const $_lib = require('./lib');

/**
 * @param {string} name The name of the method.
 */
const secondaryAPI = (name) => {
  console.log(name)
}

module.exports = $_lib
module.exports.secondaryAPI = secondaryAPI