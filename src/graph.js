import Queue from './queue'
class Graph {
    constructor() {
        this.vertices = []
        this.adList = {}
    }
    addVertex(v) {
        this.vertices.push(v)
        this.adList[v] = []
    }
    addEdge(v, w) {
        this.adList[v].push(w)
        this.adList[w].push(v)
    }
    print() {
        let s = ''
        for (const item of this.vertices) {
            s += `${item}=>`
            this.adList[item].forEach(ele => {
                s += `${ele}`
            })
            s += `\n`
        }
        return s
    }
    initColor(vertices) {
        const color = {}
        for (const item of vertices) {
            color[item] = 'white'
        }
        return color
    }
    breadFirstsearch(v, callback) {
        const color = this.initColor(this.vertices)
        const queue = new Queue()
        queue.enqueue(v)
        while (!queue.isEmpty()) {
            let u = queue.dequeue()
            const neighbors = this.adList[u]
            color[u] = 'grey'
            for (const item of neighbors) {
                if (color[item] === 'white') {
                    color[item] = 'grey'
                    queue.enqueue(item)
                }
            }
            color[u] = 'black'
            if (callback) {
                callback(u)
            }
        }
    }
    deepFirstSearch(u, color, callback) {
        color[u] = 'grey'
        const neighbors = this.adList[u]
        for (const item of neighbors) {
            if (color[item] === 'white') {
                this.deepFirstSearch(item, color, callback)
            }
        }
        color[u] = 'black'
        if(callback){
            callback(u)
        }
    }
    DFS(v, callback) {
        const color = this.initColor(this.vertices)
        this.deepFirstSearch(v, color, callback)
    }
    // seek the shortest distance
    BFS(startVertex) {
        const queue = new Queue()
        const color = this.initColor(this.vertices)
        const d = {}
        const pred = {}
        queue.enqueue(startVertex)
        for (const item of this.vertices) {
            d[item] = 0
            pred[item] = null
        }
        while (!queue.isEmpty()) {
            const u = queue.dequeue()
            const neighbors = this.adList[u]
            color[u] = 'gray'
            for (const item of neighbors) {
                if (color[item] === 'white') {
                    color[item] = 'gray'
                    d[item] = d[u] + 1
                    pred[item] = u
                    color[u] = 'black'
                }
            }
        }
        return {
            distance: d,
            predecessors: pred
        }


    }
}
const graph = new Graph()
graph.addVertex('a')
graph.addVertex('b')
graph.addVertex('c')
graph.addVertex('d')
graph.addVertex('e')
graph.addVertex('f')

graph.addEdge('a', 'b')
graph.addEdge('a', 'c')
graph.addEdge('a', 'd')
graph.addEdge('b', 'c')
graph.addEdge('c', 'e')
graph.addEdge('b', 'f')

let items = []
const fun = (v) => {
    items.push(v)
}
console.log(graph.print())
graph.DFS('a', fun)
console.log(1111, items)