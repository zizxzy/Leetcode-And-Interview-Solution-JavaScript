const setter = (obj, keyStr, value) => {
  if (typeof obj !== 'object' || !obj) return false;
  const pathArr = keyStr.split('.') || [];
  const { content, key } = pathArr.reduce((accumulator, currentValue, currentIndex) => {
    if (currentIndex !== pathArr.length - 1) return accumulator[currentValue];
    return { 'content': accumulator, 'key': currentValue };
  }, obj);
  content[key] = value;
  return true;
}

let n = {
  a: {
    b: {
      c: { d: 1 },
      bx: { y: 1 },
    },
    ax: { y: 1 },
  },
};

// 修改值
setter(n, "a.b.c.d", 3);
console.log(n.a.b.c.d); //3
setter(n, "a.b.bx", 1);
console.log(n.a.b.bx); //1
console.log(n);
