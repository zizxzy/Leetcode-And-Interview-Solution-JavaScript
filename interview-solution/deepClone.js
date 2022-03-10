//最简单的一种方式
const deepClone = (source) => {
    //只考虑对象的形式
    if (typeof source !== 'object') return;
    let target = source instanceof Array ? [] : {};
    for (let key in source) {
        target[key] = typeof source[key] === 'object' ? deepClone(source[key]) : source[key];
    }
    return target;
}

console.log(deepClone({
    a: { '1': 2 },
    2: 3,
}));

console.log(deepClone([1, 2, 3]));


// 终极版本
function clone(target) {
    if (typeof target === 'object') {
        // 考虑数组
        let cloneTarget = Array.isArray(target) ? [] : {};
        for (const key in target) {
            cloneTarget[key] = clone(target[key]);
        }
        return cloneTarget;
    } else {
        return target;
    }
}

