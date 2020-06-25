require('./case.js')
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

const a = ['a090','a080','a123','123','34','b2','A']
const isAsend = true
const sortByBool=(bool)=>{
    return !bool ? 1 : (bool===0 ? 0 : -1)
}
const compare=(a,b)=>{
    const isNo = (value)=>{
        return !Number.isNaN(Number(value))
    }
    if(a===b){
      return 0
    }else if(isNo(a) && isNo(b)){
       return sortByBool(Number(a) > Number(b))
    }else if(isNo(a) || isNo(b)){
        return sortByBool(!isNo(a))
    }else{
        if(a.length === b.length){
            return sortByBool(a.toLowerCase() > b.toLowerCase())
        }else{
            return sortByBool(a.length > b.length)
        }
    }
}

console.log('newArrary', a.sort(compare))