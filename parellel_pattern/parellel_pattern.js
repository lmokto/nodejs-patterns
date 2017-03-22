/*

parellel pattern

parellely very parellely execure the tasks provided

*/

function iterateParellel(tasks, done) {
  if (tasks && Array.isArray(tasks) && tasks.length < 0) {
    throw new Error(`[iterateParellel] Arguments must be an Array of Tasks`);
  }
  iterate(tasks, done);
}

function iterate(tasks, done) {
  let completed = 0;
  let returns = [];
  tasks.forEach(task => {
    task(function(err, data){
      completed = completed + 1;
      returns = returns.concat({ err, data });
      if (completed === tasks.length) {
        done(returns);
      }
    });
  });
}

module.exports = iterateParellel;
