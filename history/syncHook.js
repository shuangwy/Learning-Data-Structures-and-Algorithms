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
hook.tap('react', () => {
    console.log(222, 'react')
})
hook.tap('node', () => {
    console.log(222, 'node')
})
hook.call('ws')