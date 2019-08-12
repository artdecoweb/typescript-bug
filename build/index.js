const $_lib = require('./lib');

/**
 * Directly exported method.
 * @param {string} name The name of the method.
 */
module.exports=function (name) {
  console.log(name)
}

module.exports.bug = $_lib