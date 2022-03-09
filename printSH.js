//随便打开一个网页，用 JavaScript 打印所有以 s 和 h 开头的标签，并计算出标签的种类
const elArray = Array.from(document.getElementsByTagName('*'));
// 以h或者s开头，同时为全文搜索且忽略大小写
const reg = /^[h|s]/gi;
const elObj = {};

elArray.map(el => {
  const tagName = el.tagName;
  if (reg.test(tagName)){
    elObj[tagName]?elObj[tagName] ++: elObj[tagName] = 1;
  }
});
console(elObj);