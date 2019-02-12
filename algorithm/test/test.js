import { CArray } from '../CArray'
import { QuickSort } from '../quickSort'
let numElements = 5
let myNums = new CArray(numElements)
myNums.setData()

let sort = new QuickSort()
let arr = [7, 4, 3, 6, 2]
console.log(arr)
sort.quickSort(arr, 5)

console.log(arr)
