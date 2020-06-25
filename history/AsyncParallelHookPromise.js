// 同步穿行
class AsyncParallelHook {
    constructor(args) {
        this.tasks = []

    }
    tapPromise(name, task) {
        this.tasks.push(task)
    }
    promise(...args) {
       let res =  this.tasks.map(tesk => tesk(...args))
       return Promise.all(res)
    }
}
let hook = new AsyncParallelHook(['name'])

hook.tapPromise('react', name => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(name, '111')
            resolve()
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
    console.log('end-----end')
})