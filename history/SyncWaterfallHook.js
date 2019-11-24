class SyncWaterfallHook {
    constructor(args) {
        this.tasks = []

    }
    tap(name, task) {
        this.tasks.push(task)
    }
    call(...args) {
        let [first,...others] = this.tasks;
        let ret = first(...args);
        others.reduce((a,b)=>{
           return b(a);
        },ret)
       
    }
}
let hook = new SyncWaterfallHook(['name'])
hook.tap('react', (name) => {
    console.log(name, '111')
    return '停止执行'
})
hook.tap('node', (name) => {
      console.log(name, '2222')
      return 'node'
})
hook.tap('node', (name) => {
    return console.log(name, '333')
})
hook.call('ws')