//异步串行
class AsyncSeriesHook {
    constructor(args) {
        this.tasks = []

    }
    tapAsync(name, task) {
        this.tasks.push(task)
    }
    callAsync(...args) {
        let index = 0;
        let finalCallback = args.pop();
        let next = () => {
            if (this.tasks.length === index) return finalCallback();
            let task = this.tasks[index++];
            task(...args, next)
        };
        next()
    }
}
let hook = new AsyncSeriesHook(['name'])

hook.tapAsync('react', (name, fn) => {
    setTimeout(() => {
        console.log(name, '111')
        fn()
    }, 1000)

})

hook.tapAsync('node', (name, fn) => {
    setTimeout(() => {
        console.log(name, '2222')
        fn()
    }, 1000)
})

hook.callAsync('ws', () => {
    setTimeout(() => {
        console.log('end-----end')
    }, 1000)
})