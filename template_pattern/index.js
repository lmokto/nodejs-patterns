const util = require('util');
const Config = require('./template_pattern');

function JsonConfig() { }

util.inherits(JsonConfig, Config);

JsonConfig.prototype._deserialize = function (data) {
  return JSON.parse(data);
};

JsonConfig.prototype._serialize = function (data) {
  return JSON.stringify(data, null, ' ');
};

const jsonConfig = new JsonConfig();

jsonConfig.read('samples/conf.json');
