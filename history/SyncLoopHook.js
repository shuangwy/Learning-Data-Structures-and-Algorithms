class SyncLoopHook {
    constructor(args) {
        this.tasks = []

    }
    tap(name, task) {
        this.tasks.push(task)
    }
    call(...args) {
        this.tasks.forEach(task => {
            let ret;
            do {
                ret = task(...args)
            } while (ret != undefined)
        })
    }
}
let hook = new SyncLoopHook(['name'])
let total = 0;
hook.tap('react', (name) => {
    console.log(name, '111')
    return ++ total === 3 ? undefined : 'next啊'
})
hook.tap('node', (name) => {
    console.log(name, '2222')
})
hook.tap('node', (name) => {
     console.log(name, '333')
})
hook.call('ws')