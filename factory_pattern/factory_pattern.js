/*

  Factory Pattern

  Encapsulation Pattern

*/

const env = process.env.NODE_ENV;

function Profiler(label) {
  this.label = label;
  this.lastTime = null;
}

Profiler.prototype.start = function () {
  this.lastTime = process.hrtime();
};

Profiler.prototype.end = function () {
  const [ seconds, nanoseconds ] = process.hrtime(this.lastTime);
  console.log(
    `
      Timer :: ${this.label} :: took :: ${seconds}seconds and ${nanoseconds} nanoseconds
    `
  );
};

module.exports = function(label) {
  if (env === "development") {
    return new Profiler(label);
  } else if (env === "production") {
    return {
      start: () => {},
      end: () => {}
    }
  } else {
    throw new Error(`[Profiler] set 'NODE_ENV' first`);
  }
}
