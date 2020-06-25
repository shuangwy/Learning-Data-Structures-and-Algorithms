class AsyncParallelHook {
    constructor(args) {
        this.tasks = []

    }
    tapAsync(name, task) {
        this.tasks.push(task)
    }
    callAysnc(...args) {
        let finanlCallback = args.pop(), index = 0
        let fn = () => {
            index++;
            if (index === this.tasks.length) {
                finanlCallback()
            }

        }
        this.tasks.forEach(task => {
            task(...args, fn)
        })

    }
}
let hook = new AsyncParallelHook(['name'])

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

hook.callAysnc('ws',()=>{
    console.log('end-----end')
})