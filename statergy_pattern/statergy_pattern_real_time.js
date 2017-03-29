const fs = require('fs');
const objectPath = require('object-path');

function Config(statergy) {
  this.data = {};
  this.statergy = statergy;
}

Config.prototype.get = function (path) {
  return objectPath.get(this.data, path);
};

Config.prototype.set = function (path, value) {
  return objectPath.set(this.data, path, value);
};

Config.prototype.read = function (file) {
  console.log('Deserializing from ' , file);
  this.data = this.statergy.deserialize(fs.readFileSync(file, 'utf-8'));
};

Config.prototype.save = function (file) {
  fs.writeFileSync(file, this.statergy.serialize(this.data));
};

module.exports = Config;
