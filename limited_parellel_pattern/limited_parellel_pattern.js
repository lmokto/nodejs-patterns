/*

limited parellel pattern

execute in parellel until limit and start exectuing in serial

*/

function doLimitedParellel(tasks, limit, done) {
  if (tasks && Array.isArray(tasks) && tasks.length < 0) {
    throw new Error(`[iterateParellel] Arguments must be an Array of Tasks`);
  }
  iterate(tasks, limit, done);
}

function iterate(tasks, limit, done) {
  let running = 0;
  let completed = 0;
  let i = 0;
  let returns = [];
  while (running < limit && completed !== tasks.length) {
    const task = tasks[i];
    task(function(err, data) {
      completed = completed + 1;
      running = running - 1;
      returns = returns.concat({ err, data });
      if (completed === tasks.length) {
        return done(returns);
      }
    });
    running =  running + 1;
    i = i + 1;
  }
  function serial(tasks, i) {
    if (completed === tasks.length) {
      return done(returns);
    }
    const task =  tasks[i];
    const callback = function(err, returned) {
      returns = returns.concat({ err, data: returned });
      i = i + 1;
      completed = completed + 1;
      return serial(tasks, i);
    }
    task.apply(undefined, [ callback ]);
  }
  serial(tasks, i);
}

module.exports = doLimitedParellel;
