const curry = (fn, args) => {
  const length = fn.length;
  let _args = args || [];
  return function () {
    let argArray = _args.slice(0);
    for (let i = 0; i < arguments.length; i++) {
      argArray.push(arguments[i]);
    }
    if (argArray.length < length) {
      return curry(fn, argArray);
    } else {
      return fn.apply(this, argArray);
    }
  }
}

var fn = curry(function (a, b, c) {
  console.log([a, b, c]);
});


const add = curry(function (a, b, c) {
  return a + b + c;
})
console.log(add(1)(2)(3));
fn("a", "b", "c") // ["a", "b", "c"]
fn("a", "b")("c") // ["a", "b", "c"]
fn("a")("b")("c") // ["a", "b", "c"]
fn("a")("b", "c") // ["a", "b", "c"]

