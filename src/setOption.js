class Set {
    constructor() {
        this.items = {}
    }
    has(value) {
        return this.items.hasOwnProperty(value)
    }
    add(value) {
        if (this.has(value)) {
            return false
        } else {
            this.items[value] = value
            return value
        }
    }
    remove(value) {
        if (this.has(value)) {
            delete this.items[value]
            return true
        } else {
            return false
        }
    }
    clear() {
        this.items = {}
    }
    getItems() {
        return this.items
    }
    size() {
        return Object.keys(this.items).length
    }
    value() {
        return Object.values(this.items)
    }
    /**
     * 并集
     * @param {*} otherSet 
     */
    union(otherSet) {
        const result = new Set()
        for (let item of this.value()) {
            result.add(item)
        }
        for (let item of otherSet.value()) {
            result.add(item)
        }
        return result
    }
    /**
     * 交集
     * @param {*} otherSet 
     */
    intersection(otherSet) {
        const result = new Set()
        const arr = this.value()
        for (let item of arr) {
            if (otherSet.value().includes(item)) {
                result.add(item)
            }
        }
        return result
    }
    different(otherSet) {
        const result = new Set()
        const arr = this.value()
        for(let item of arr){
            if(!otherSet.has(item)){
                result.add(item)
            }
        }
        return result
    }

}
const clo = new Set()
clo.add('123')
clo.add('abc')
const clos = new Set()
clos.add('3534')
clos.add('35344')
clos.add('123')
// console.log('clos', clos, clo)
// console.log(1111, clos.different(clo).getItems())