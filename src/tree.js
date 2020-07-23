class Tree {
    constructor() {
        this.root = null
    }
    Node(value) {
        this.value = value
        this.left = null
        this.right = null
    }
    InsertNode(node, newNode) {
        if (newNode.value > node.value) {
            if (node.right === null) {
                node.right = newNode
            } else {
                this.InsertNode(node.right, newNode)
            }
        } else if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode
            } else {
                this.InsertNode(node.left, newNode)
            }
        }
    }
    insert(value) {
        const newNode = new this.Node(value)
        if (this.root === null) {
            this.root = newNode
        } else {
            this.InsertNode(this.root, newNode)
        }
    }
    getRoot() {
        return this.root
    }
    Traverse(node, callback) {
        if (node === null) return
        this.Traverse(node.right, callback)
        callback(node.value)
        this.Traverse(node.left, callback)

    }
    traverse(callback) {
        this.Traverse(this.root, callback)
    }
    mini() {
        let node = this.root
        if (node === null) return null
        while (node && node.left) {
            node = node.left
        }
        return node.value
    }
    max() {
        let node = this.root
        if (node === null) return null
        while (node && node.right) {
            node = node.right
        }
        return node.value
    }
    FindMinNode(node) {
        let nodes = node
        if (nodes === null) return null
        while (nodes && nodes.left) {
            nodes = nodes.left
        }
        return nodes
    }
    removeNode(node, value) {
        if (node === null) return null
        if (node.value < value) {
            node.right = this.removeNode(node.right, value)
            return node
        } else if (node.value > value) {
            node.left = this.removeNode(node.left, value)
            return node
        } else {
            if (node.left === null && node.right === null) {
                node = null
                return node
            }
            if (node.left === null && node.right) {
                node = node.right
                return node
            } else if (node.right === null && node.left) {
                node = node.left
                return node
            }
            const aux = this.FindMinNode(node.right)
            node.value = aux.value
            node.right = this.removeNode(node.right, aux.value)
            return node
        }

    }
    remove(value) {
        this.root = this.removeNode(this.root, value)

    }
}
const tree = new Tree()
tree.insert(9)
tree.insert(4)
tree.insert(10)
tree.insert(2)
tree.insert(5)
let items = []
// const call = (item) => {
//     items.push(item)
// }
// tree.traverse(call)
console.log(9999, tree.remove(5), tree.getRoot())