//异步串行
class AsyncSeriesWaterfallHook {
    constructor(args) {
        this.tasks = []
    }
    tapPromise(name, task) {
        this.tasks.push(task)
    }
    promise(...args) {
        //     let index = 0;
        //     let finalCallback = args.pop()
        //     let next = (err, data) => {
        //         let task = this.tasks[index];
        //         if (!task) return finalCallback()
        //         if (index === 0) {
        //             task(...args, next)
        //         } else {
        //             task(data, next)
        //         }
        //         index++;
        //     }
        //    return next()
        let [first, ...others] = this.tasks
        return others.reduce((p, next) => {
            return p.then((...args) => {
                next(...args)
            })
        }, first(...args))
    }
}
let hook = new AsyncSeriesWaterfallHook(['name'])

hook.tapPromise('react', name => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log(name, '111')
            resolve('niam')
        }, 1000)
    })
})

hook.tapPromise('node', name => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log(name, '2222')
            resolve()
        }, 1000)
    })
})

hook.promise('ws').then(() => {
    setTimeout(() => {
        // console.log('end-----end')
    }, 1000)
})