import { format } from 'path'

export class LinkedListNode {
  constructor(value = null, next = null) {
    this.value = value
    this.next = next
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`
  }
}

export class LinkedList {
  constructor() {
    this.dummyHead = new LinkedListNode()
    this.size = 0
  }

  // 获取链表中的个数
  getSize() {
    return this.size
  }

  // 返回列表是否为空

  isEmpty() {
    return size === 0
  }

  // 在链表头部添加新的元素
  addFirst(e) {
    this.add(0, e)
  }
  // 添加某个位置添加节点
  add(index, e) {
    if (index < 0 || index > this.size) {
      return false
    }

    let prev = this.dummyHead
    for (let i = 0; i < index; i++) {
      prev = prev.next
    }
    prev.next = new LinkedListNode(e, prev.next)

    this.size++
  }
  // 在链表尾部添加新的元素
  addLast(e) {
    add(size, e)
  }
  /**
   * 获得链表的第index个位置 的元素
   * @param {} index
   */
  get(index) {
    if (index < 0 || index > this.size) {
      return false
    }
    let cur = this.dummyHead.next
    for (let i = 0; i < index; i++) {
      cur = cur.next
    }
    return cur.value
  }
  // 获取第一个元素
  getFirst() {
    this.get(0)
  }
  // 获取最后一个元素
  getLast() {
    this.get(this.size - 1)
  }

  // 列表翻转

  reverse() {
    let currNode = this.dummyHead.next
    let prevNode = null
    let nextNode = null
    while (currNode) {
      nextNode = currNode.next
      currNode.next = prevNode
      prevNode = currNode
      currNode = nextNode
    }
    return (this.dummyHead.next = this.prevNode)
  }

  // 删除某个节点
  remove(index) {
    if (index < 0 || index > this.size) {
      return false
    }
    let prev = this.dummyHead
    for (let i = 0; i < index; i++) {
      prev = prev.next
    }
    let retNode = prev.next
    prev.next = retNode.next
    retNode.node = null
    size--
    return retNode.value
  }
  // 删除头部节点
  removeFirst() {
    return remove(0)
  }
  // 删除尾部节点()

  removeLast() {
    return remove(this.size - 1)
  }

  // 将链表准换为数组
  toArray() {
    const nodes = []
    let currentNode = this.dummyHead.next
    while (currentNode) {
      nodes.push(currentNode)
      currentNode = currentNode.next
    }
    return nodes
  }

  toString(callback) {
    return this.toArray()
      .map(node => node.toString(callback))
      .toString()
  }
}
