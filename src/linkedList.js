class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }
    Node(element) {
        this.element = element
        this.next = null
    }
    append(element) {
        const node = new this.Node(element)
        if (this.head === null) {
            this.head = node
        } else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        this.length++
    }
    getHead() {
        return this.head
    }
    insert(position, element) {
        if (position > -1 && position < this.length) {
            const node = new this.Node(element)
            if (position === 0) {
                const current = this.head
                this.head = node
                this.head.next = current
            } else {
                let index = 0,
                    current = this.head,
                    previous = null
                while (index < position) {
                    previous = current
                    current = current.next
                    index++
                }
                previous.next = node
                node.next = current
            }
            this.length++
        }
    }
    removeAt(postion) {
        if (postion > -1 && postion < this.length) {
            let current = this.head
            if (postion === 0) {
                this.head = current.next
            } else {
                let previous = null
                let index = 0
                while (index < postion) {
                    previous = current
                    current = current.next
                    index++
                }
                previous.next = current.next
            }
            this.length--
            return current
        }
        return null
    }
    indexOf(element) {
        let index = 0,
            current = this.head
            console.log('current',current.element)
        while (current) {
            if (current.element === element) {
                console.log(777)
                return index
            }
            index++;
            current = current.next
        }
        return -1
    }
    remove(element){
        this.removeAt(this.indexOf(element))
    }
    isEmpty(){
        return this.length === 0
    }
    size(){
        return this.length
    }

}
const link = new LinkedList()
link.append(1)
link.append(3)
link.append(4)
link.append(8)
link.remove(3)
// console.log(33333, link.getHead())