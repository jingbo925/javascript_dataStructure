export class QuickSort {
  constructor(arr) {
    this.arr = arr
  }

  quickSort(arr, n) {
    this._quickSort(arr, 0, n - 1)
  }

  _quickSort(arr, l, r) {
    if (l >= r) {
      return
    }
    const p = this._partition(arr, l, r)
    console.log(p)
    this._quickSort(arr, l, p - 1)
    this._quickSort(arr, p + 1, r)
  }
  _partition(arr, l, r) {
    const v = arr[l]
    let j = l
    for (let i = l + 1; i <= r; i++) {
      if (arr[i] < v) {
        this.swap(arr, j + 1, i)
        j++
      }
    }
    this.swap(arr, l, j)
    return j
  }
  swap(arr, index1, index2) {
    let temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
  }
}
