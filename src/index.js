// let { SyncLoopHook } = require('tapable')
// console.log('synhook',SyncLoopHook)
// class Lesson {
//     constructor() {
//         this.hooks = {
//             arch: new SyncLoopHook(['name']),

//         }
//     }
//     start() {
//         console.log('start')
//         this.hooks.arch.call('ws')
//     }
//     tap() {
//         this.hooks.arch.tap('node', (name) => {
//             console.log('node', name)
//             return 'caonima'
//         })
//         this.hooks.arch.tap('react', (name) => {
//             console.log('react', name)
//         })
//     }
// }

// let l = new Lesson();
// l.tap()
// l.start()

require('./2case.js')