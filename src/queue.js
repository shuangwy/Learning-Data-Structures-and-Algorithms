console.log('caoniam')
class Queue {
    constructor(){
        this.items=[]
    }
    enqueue(ele){
        this.items.push(ele)
    }
    dequeue(){
         return this.items.shift()
    }
    front(){
        return this.items[0]
    }
    isEmpty(){
        console.log('isEmpty', this)
        return this.items.length === 0
    }
    size(){
        return this.items.length
    }
    currentItem(){
        return this.items
    }

}

// 击鼓传花
const hotPotato=(elements,num)=>{
    const queue = new Queue()
    const eliminated =[]
    elements.forEach(item => {
        queue.enqueue(item)
    });
    while(queue.size()>1){
        for(let i =1; i<num;i++){
            queue.enqueue(queue.dequeue())
        }
        eliminated.push(queue.dequeue())
    }
    return {
        eliminated,
        winner: queue.currentItem()
    }
}

// 优先队列
class PriorityQueue{
    constructor(){
        this.items=[]
    }
    QueueItem(element,priority){
        this.element=element
        this.priority=priority
    }
    enqueue(element,priority){
        const queueItem = new this.QueueItem(element,priority)
        let flag = false
        for(let i= 0; i<this.items.length;i++){
            if(queueItem.PriorityQueue>this.items[i].priority){
                this.items.splice(i,0,queueItem)
                flag=true
                break
            }
        }
        if(!flag){
            this.items.push(queueItem)
        }
    }
    getItem(){
        return this.items
    }
}

const queue = new PriorityQueue()
queue.enqueue('er',12)
queue.enqueue('wang',10)
// console.log(44444,queue.getItem())


