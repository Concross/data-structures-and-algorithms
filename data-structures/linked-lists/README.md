# Linked List
Data structure for a singly-linked list

## Usage 
- Run `npm install` to install dependencies
- all methods besides `deserialize()` and `mergeLists()` are class methods
- `deserialize() and mergeLists()` are static methods on the LinkedList class
## Methods
- `append(value)` appends a node to the end of the linked list
- `prepend(value)` prepends a node to the begining of the linked list
- `reverse()` reverses the order of the nodes in the linked list
- `remove(offset)` removes a node from the linked list
- `serialize()` stringifies the linked list 
- `LinkedList.deserialize(serializedList)` creates a new LinkedList from a stringified linked list object
- `insertBefore(refVal, newVal)` inserts a new Node with value `newVal` before Node with `refVal`
- `insertAfter(refVal, newVal)` inserts a new Node with value `newVal` after Node with `refVal`
- `kthFromEnd(k)` returns the value of a node k-offset from the end of the list
- `mergeLists(list1, list2)` merges list 2 into list 2, alternating values with list 1 starting the head