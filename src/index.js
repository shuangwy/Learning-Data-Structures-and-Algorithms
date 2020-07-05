require('./case.js')
require('./queue')
require('./linkedList')
require('./setOption')
require('./set')
require('./hashTable')
//异步串行瀑布钩子

// let { AsyncSeriesWaterfallHook } = require('tapable')
// class Lesson {
//     constructor() {
//         this.hooks = {
//             arch: new AsyncSeriesWaterfallHook(['name']),

//         }
//     }
//     start() {
//         this.hooks.arch.callAsync('ws',(() => {
//             setTimeout(() => {
//                 console.log('end')
//             }, 1000)
//         }))
//     }
//     tap() {
//         this.hooks.arch.tapAsync('node', (name,fn) => {
//             setTimeout(() => {
//                 console.log('node', name);
//                 fn('error','result')
//             }, 1000)
//         })
//         this.hooks.arch.tapAsync('react', (name,fn) => {
//             setTimeout(() => {
//                 console.log('react', name);
//                 fn()
//             }, 1000)
//         })
//     }
// }

// let l = new Lesson();
// l.tap()
// l.start()
