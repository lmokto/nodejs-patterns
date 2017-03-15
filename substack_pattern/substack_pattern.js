/*

Substack Pattern

A Way only exporting a single function

*/

function get_time() {
  return new Date();
}

module.exports = function(message) {
  console.log(`INFO :: ${get_time()} :: ${message}`);
}


module.exports.warning = function(message) {
  console.log(`WARN :: ${get_time()} :: ${message}`);
}
