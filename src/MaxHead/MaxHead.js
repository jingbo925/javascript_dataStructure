class MaxHead {
    constructor() {
        this.data = []
    }

    size() {
        return this.data.length
    }

    isEmpty() {
        return this.data.length == 0
    }

    parent(index) {
        if(index = 0) {
            return 
        }
        return (index -1 ) / 2
    }
    leftChild(index) {
        return index * 2 + 1
    }
    rigthChild(index) {
        return index * 2 + 2
    }
    add(value) {
        this.data.push(value)
        this.siftUp(this.size() - 1)
    }

    siftUp(index) {
         while(inde > 0 && this.data[this.parent(index)] < this.data[index] ) {
            this.swap(index, this.parent(index))
            index = this.parent(index)
         }
    }

    // 查找最大元素
    findMax() {
        if(this.size() == 0) {
            return 
        }
        return this.data[0]
    } 

    // 去除最大元素
    extractMax() {
        let ret = this.findMax()
        this.swap(0, this.size() - 1)
        this.data.shift()
        siftDown(0)
        return ret
    }

    siftDown(k) {
        while(this.leftChild(k) < this.getSize()) {
            let j = this.leftChild(k) 
            if(j + 1 < this.getSize() && this.data[j + 1] > this.data[j]){
                j = this.rigthChild(k)
            }
            if(this.data[k] > this.data[j]){
                break
            }
            this.swap(k, j)
            k = j
        }
    }
    swap(i, j) {
        if(i < 0 || i>= this.size || j < 0 || j >= this.size) {
            return 
        }
        const temp = this.data[i] 
        this.data[i] = this.data[j]
        this.data[j] = temp
    }
} 

