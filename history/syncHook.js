class SyncHook {
    constructor(args) {
        this.tasks = []

    }
    tap(name, task) {
        this.tasks.push(task)
    }
    call(...args) {
        this.tasks.forEach(task=>task(...args))
    }
}
let hook = new SyncHook(['name'])
hook.tap('react', (name) => {
    console.log(222, name)
})
hook.tap('node', (name) => {
    console.log(name, 'node')
})
hook.call('ws')