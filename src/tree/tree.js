
export class Node {
    constructor(value = null, left = null, right = null) {
        this.value = value
        this.left = left
        this.right = right
    }
}

export class BST {
    constructor() {
        this.root = null
        this.size = 0 
    }

    size() {
        return this.size
    }
     
    isEmpty() {
        return size == 0
    }

    add(value) {
        this._add(this.root, value)
    }
    // 向以node 为根的二分搜索树插入元素value, 递归算法
    _add(node, value) {
        if(node == null) {
            return new Node(value)
        }
        if(value < node.value) {
            node.left = this._add(node.left, value)
        }else {
            node.right = this._add(node.right, value)
        }
        return node
    }

    contains(node, value) {
        if(node == null) {
            return false
        }
        if(node.value == value) {
            return true
        }else if(value < node.value) {
            return contains(node.left, value)
        }else {
            return contions(node.right, value)
        }
    }

    // 前序遍历
    preOrder(node) {
        if(node == null) {
            return
        }
        console.log(node.value)
        preOrder(node.left)
        preOrder(node.right)
    }
    // 中序遍历
    
    inOrder(node) {
        if(node == null) {
            return
        }
        inOrder(node.left)
        console.log(node.value)
        inOrder(node.right)
    }
    
}