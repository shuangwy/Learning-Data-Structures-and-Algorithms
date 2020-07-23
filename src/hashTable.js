import LinkedList from './linkedList'

class HashTable {
    constructor() {
        this.table = []
    }
    looseHashCode(key) {
        let hash = 0
        for (let item of key) {
            hash += item.charCodeAt()
        }
        return hash
    }
    Node(key,value){
        this.key=key
        this.value=value
    }

    put(key, value) {
        const postion = this.looseHashCode(key)
        if (!this.table[postion]) {
            const link = new LinkedList()
            this.table[postion] = link
        }
        this.table[postion].append(new this.Node(key,value))
        // if(this.table[postion] === undefined){
        //     this.table[postion]=new
        // }
    }
    getItem() {
        return this.table
    }
    remove() {
        this.table[this.looseHashCode(key)] = undefined
    }
    get(key) {
        const postion = this.looseHashCode(key)
        if(this.table[postion]){
            let current = this.table[postion].getHead()
            while(current){
                if(current.element.key === key){
                    return current.element.value
                }
                current = current.next
            }
        }else{
            return undefined
        }
    }
    remove(key){
        const postion=this.looseHashCode(key)
        if(this.table[postion]){
            let current = this.table[postion].getHead()
            while(current){
                if(current.element.key === key){
                    this.table[postion].remove(current.element)
                    if(this.table[postion].isEmpty()){
                        this.table[postion]=undefined
                        return true
                    }
                }
                current = current.next
            }
        }
    }
}
const ht = new HashTable()
ht.put('12', 'this.hash')
ht.put('21', 'this.hash.chart')
ht.remove('12')
// console.log(1111, ht.get('21'))
// console.log(2222, ht.getItem())