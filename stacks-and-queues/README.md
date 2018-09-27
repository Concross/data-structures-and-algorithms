# Stacks and Queues
An exploration into stack and queue data structures

## Stack
### Methods
#### stack.push(val)
- pushes a value on top of the stack
- throws an error if no parameter is passed
- increases the size of the stack

#### stack.pop()
- pops the top value off a stack and returns it
```
 top
-----
| 4 |          -----
| 3 |  'pop()' | 3 |
| 2 |    ==>   | 2 |
| 1 |          | 1 |
-----          -----
bottom
```
- `stack.pop()` will return `4`
- `stack.pop()` will return undefined if the stack is empty

#### stack.peek()
- `stack.peek()` will return the top value in a stack without removing it
```
 top
-----          -----
| 4 |          | 4 |
| 3 | 'peek()' | 3 |
| 2 |   ==>    | 2 |
| 1 |          | 1 |
-----          -----
bottom
```
- `stack.peek()` will return `4`
- `stack.peek()` will return undefined for an empty stack