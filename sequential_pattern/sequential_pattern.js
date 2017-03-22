/*

iterateSeries

Seriously Very Seriously Execute the tasks

*/

function iterateSeries(tasks, done) {
  if (tasks && Array.isArray(tasks) && tasks.length < 0) {
    throw new Error(`[iterateSeries] Arguments must be an Array of Tasks`);
  }
  iterate(tasks, 0, [], done);
}

function iterate(tasks, current, returns, done) {
  if (current === tasks.length) {
    return done(returns);
  }
  const task =  tasks[current];
  const callback = function(err, returned) {
    const _returns = returns.concat({ err, data: returned });
    return iterate(tasks, current + 1, _returns, done);
  }
  task.apply(undefined, [ callback ]);
}

module.exports = iterateSeries;
