const repeat1 = function (src, n) {
  return (new Array(n + 1)).join(src);
}


const repeat2 = function (src, n) {
  return n > 0 ? src.concat(repeat2(src, --n)) : "";
}

const repeat3 = function (src, n) {
  let output = '';
  for (let i = 0; i < n; i++) {
    output += src;
  }
  return output;
}

console.log(repeat3("abc", 4));

console.log(repeat2("abc", 4));

console.log(repeat1("abc", 4));