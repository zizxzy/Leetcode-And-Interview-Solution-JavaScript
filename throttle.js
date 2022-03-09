const throttle = (func, wait) => {
    var flag = true;// 标识是否在节流状态
    return function () {
        if (!flag) return;
        flag = false;
        const context = this;
        const args = arguments;
        setTimeout(() => {
            flag = true;
            func.apply(context, args);
        }, wait);
    }
}
// test
const test = throttle(() => { console.log('111') }, 3000)
setInterval(() => {
    test();
}, 1000);