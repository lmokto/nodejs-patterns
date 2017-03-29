const fs = require('fs');
const objectPath = require('object-path');

function Config() {
  this.data = {};
}

Config.prototype.read = function (file) {
  console.log('Deserializing from ' + file);
  this.data = this._deserialize(fs.readFileSync(file, 'utf-8'));
};

Config.prototype.save = function (file) {
  console.log('Serializing to ' + file);
  fs.writeFileSync(file, this._serialize(this.data));
};

Config.prototype.get = function (path) {
  return objectPath.get(this.data, path);
};

Config.prototype.set = function (path, value) {
  return objectPath.set(this.data, path, value);
};

Config.prototype._serialize = function () {
  throw new Error('_serialize() implementation needed!');
};

Config.prototype._deserialize = function () {
  throw new Error('_deserialize() implementation needed!');
};

module.exports = Config;
