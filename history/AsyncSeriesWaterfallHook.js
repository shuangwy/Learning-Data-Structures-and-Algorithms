//实现promise版异步串行
class AsyncSeriesWaterfallHook {
    constructor(args) {
        this.tasks = []
    }
    tapAsync(name, task) {
        this.tasks.push(task)
    }
    callAsync(...args) {
        let index = 0;
        let finalCallback = args.pop()
        let next = (err, data) => {
            let task = this.tasks[index];
            if (!task) return finalCallback()
            if (index === 0) {
                task(...args, next)
            } else {
                task(data, next)
            }
            index++;
        }
        next()
    }
}
let hook = new AsyncSeriesWaterfallHook(['name'])

hook.tapAsync('react', (name, fn) => {
    setTimeout(() => {
        console.log(name, '111')
        fn('error','niam')
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