const debounce = (func, wait) => {
    let timer = null;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(context, args);
        }, wait)
    }
}
// test
const test = debounce((a) => { console.log(a); }, 5000);
test('a');