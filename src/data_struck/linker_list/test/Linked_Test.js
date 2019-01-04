import { LinkedList } from '../LinkedList'

const linked = new LinkedList()

for (let i = 0; i < 5; i++) {
  linked.addFirst(i)
}

linked.add(2, 666)
console.log('fdsf')
console.log(linked.toString())
// console.log(li nked.get(2))

linked.reverse()
console.log(linked.toString())
