class SyncBailHook {
    constructor(args) {
        this.tasks = []

    }
    tap(name, task) {
        this.tasks.push(task)
    }
    call(...args) {
        let ret, index = 0
        do {
            ret = this.tasks[index++](...args)
        } while (ret === undefined && index < this.tasks.length)
    }
}
let hook = new SyncBailHook(['name'])
hook.tap('react', () => {
    console.log(222, 'react')
    return '停止执行'
})
hook.tap('node', () => {
    console.log(222, 'node')
})
hook.call('ws')