/*

named_exports

*/

function get_time() {
  return new Date();
}

exports.info = function(message) {
  console.log(`INFO :: ${get_time()} :: ${message}`);
}


exports.warning =  function(message) {
  console.warn(`WARN :: ${get_time()} :: ${message}`);
}
