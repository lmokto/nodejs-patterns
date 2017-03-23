function* makeGenerator() {
  yield 'Hello World!';
  console.log('Re-Entered');
}

let gen1 = makeGenerator();
console.log(gen1.next());

function* simpleGenerator() {
  yield 'apple';
  yield 'orange';
  return 'watermelon';
}

let fruitGen = simpleGenerator();

console.log(fruitGen.next());
console.log(fruitGen.next());
console.log(fruitGen.next());

/*
  Generators as Iterators
*/

function* iterate(arr) {
  for (var i = 0; i < arr.length; i++) {
    yield arr[i];
  }
}

let it = iterate(['apple', 'orange', 'watermelon']);
let currentItem =  it.next();
while (!currentItem.done) {
  console.log(currentItem.value);
  currentItem = it.next();
}


function* twoWayGenerator() {
  let what = yield null;
  console.log('what is what ?', what);
  console.log('Hello', what);
}

let twoWay = twoWayGenerator();

twoWay.next();
twoWay.next('Sathish');

// Throw Error

let twoWayError = twoWayGenerator();

twoWayError.next();
// twoWayError.throw(new Error('Ahh!!!! Error while calling twoWayGenerator'));
