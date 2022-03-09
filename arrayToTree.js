let input = [
  {
    id: 1,
    val: "学校",
    parentId: null,
  },
  {
    id: 2,
    val: "班级1",
    parentId: 1,
  },
  {
    id: 3,
    val: "班级2",
    parentId: 1,
  },
  {
    id: 4,
    val: "学生1",
    parentId: 2,
  },
  {
    id: 5,
    val: "学生2",
    parentId: 3,
  },
  {
    id: 6,
    val: "学生3",
    parentId: 3,
  },
];
function buildTree(arr, parentId, childrenArray) {
  arr.forEach((item) => {
    if (item.parentId === parentId) {
      item.children = [];

      buildTree(arr, item.id, item.children);
      childrenArray.push(item);
    }
  });
}
function arrayToTree(input, parentId) {
  const array = [];
  buildTree(input, parentId, array);
  return array;
}
const obj = arrayToTree(input, null);
// console.log(obj);



var arr = [{ id: 1, pid: '-1' }, { id: 11, pid: '1' }, { id: 12, pid: '1' }]


const flatArrayToTree = (arr) => {
  let map = {};
  let tree = new Array();
  arr.map((value) => {
    map[value.id] = value;
    map[value.id].children = new Array();
  });

  arr.map((value) => {
    if (value.pid !== '-1') map[value.pid].children.push(value);
    else tree.push(value);
  })
  return tree;
}
console.log(flatArrayToTree(arr));



// 返回带有层级信息的树
const listToTreeWithLevel = function (list, parent, level) {
  let output = [];
  for (let node of list) {
    if (node.pid === parent) {
      node.level = level;
      let children = listToTreeWithLevel(list, node.id, level + 1);
      if (children.length) {
        node.children = children;
      }
      output.push(node);
    }
  }
  return output;
}

console.log(listToTreeWithLevel(arr, '-1', 0));