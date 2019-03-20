export class LoopQueue {
  constructor(capacity = 10) {
    data = new Array(capacity + 1)
    front = 0
    tail = 0
    size = 0
  }

  getCapacity() {
    return this.data.length - 1
  }

  isEmpty() {
    return this.front === this.tail
  }

  getSize() {
    return this.size
  }
  // 入队
  enqueue(value) {
    if ((this.tail + 1) % this.data.length === this.front) {
      this._resize(this.getCapacity * 2)
    }

    this.data[this.tail] = value
    this.tail = (this.tail + 1) % data.length
    this.size++
  }

  // 出队

  dequeue() {
    if (this.isEmpty()) {
      return null
    }
    const ret = this.data[this.front]
    this.data[this.front] = null
    this.front = (this.front + 1) & this.data.length
    size--
    return ret
  }
  // 动态扩容
  _resize(newCapacity) {
    const newData = new Array(newCapacity + 1)
    for (let i = 0; i < this.size; i++) {
      newData[i] = this.data[(i + this.front) % this.data.length]
    }

    this.data = newData
    front = 0
    tail = size
  }
}
