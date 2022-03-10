function myInterval(fn, a, b) {
    this.a = a;
    this.b = b;
    this.handler = -1;
    this.count = 0;
    this.start = () => {
        this.handler = setTimeout(() => {
            fn();
            this.count++;
            this.start();
            console.log(this.a + this.count * this.b);
        }, this.a + this.count * this.b)
    }
    this.stop = () => {
        clearInterval(this.handler);
        this.count = 0;
    }
}
var a = new myInterval(() => { console.log('123') }, 1000, 2000);
a.start();
a.stop();