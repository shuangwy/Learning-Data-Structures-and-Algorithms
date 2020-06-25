//实现promise版异步串行
class AsyncSeriesHook {
    constructor(args) {
        this.tasks = []

    }
    tapPromise(name, task) {
        this.tasks.push(task)
    }
    promise(...args) {
        let [first, ...others] = this.tasks;
        return others.reduce((p, next) => {
            return p.then((...args) => {
                next(...args)
            })
        }, first(...args))

    }
}
let hook = new AsyncSeriesHook(['name'])

hook.tapPromise('react', name => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(name, '111')
            resolve('caonima')
        }, 1000)
    })
})

hook.tapPromise('node', name => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(name, '2222')
            resolve()
        }, 1000)
    })
})

hook.promise('ws').then(() => {
    setTimeout(() => {
        console.log('end-----end')
    }, 1000)
})