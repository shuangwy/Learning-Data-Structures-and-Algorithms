class HashTablex {
    constructor() {
        this.table = [],
        this.size = 0
    }
    looseHashCode(key) {
        let hash = 0
        for (let item of key) {
            hash += item.charCodeAt()
        }
        return hash % 37
    }
    Node(key, value) {
        this.key = key
        this.value = value
    }
    put(key, value) {
        const position = this.looseHashCode(key)
        if (this.table[position] === undefined) {
            this.table[position] = new this.Node(key, value)
        } else {
            let index = position + 1
            while (this.table[index] !== undefined) {
                index++
            }
            this.table[index] = new this.Node(key, value)
        }
        this.size++
    }
    value() {
        return this.table
    }
    get(key) {
        const positon = this.looseHashCode(key)
        if (this.table[positon]) {
            let index = positon , current=0
            while (this.table[index] || current < this.size ) {
                if(this.table[index] && this.table[index].key === key){
                    return this.table[index].value
                }else{
                    index++
                    current++
                }
            }
            return undefined

        } else {
            return false
        }
    }
    remove(key) {
        const positon = this.looseHashCode(key)
        if (this.table[positon]) {
            let index = positon
            while (this.table[index]) {
                if (this.table[index].key === key) {
                    this.table[index] = undefined
                    this.size--
                    return true
                }else{
                    index++
                }
            }
            return false
        } else {
            return false
        }
    }
}
const h = new HashTablex()
h.put('31', 'wystans')
h.put('13', 'wystan')
h.put('22', 'wystansw22')
h.remove('13')
// console.log(111111, h.value(), h.get('22'))