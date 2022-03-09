// this的指向问题,箭头函数不会创建自己的this,它只会从自己的作用域链的上一层继承this
var obj = {
  i: 10,
  b: () => console.log(this.i, this),
  c: function () {
    console.log(this.i, this)
  }
}
obj.b();
// undefined, {} node 环境
obj.c();
// 10, Object {...}


// 没有arguments，通常使用剩余参数
function foo(arg1, arg2) {
  var f = (...args) => {
    return args[1];
  };
  return f(arg1, arg2);
}
console.log(foo(1, 2));

// 没有new
var Foo = () => { };
var foo = new Foo(); // TypeError: Foo is not a constructor

// 没有prototype
var Foo = () => { };
console.log(Foo.prototype); // undefined

// 与call，apply一起使用的时候不能传递this
var adder = {
  base: 1,

  add: function (a) {
    var f = v => v + this.base;
    return f(a);
  },

  addThruCall: function (a) {
    var f = v => v + this.base;
    var b = {
      base: 2
    };

    return f.call(b, a);// 绑定的b失效
  }
};

console.log(adder.add(1));         // 输出 2
console.log(adder.addThruCall(1)); // 仍然输出 2

// 与传统函数相比更短
const map = ['1', '11', '111'];
console.log(elements.map(element => element.length)); // [8, 6, 7, 9]