class Node:
  def __init__(self, value, next=None):
    self.value = value
    self.next = next

class LinkedList:
  def __init__(self):
    self.head = None
    self.tail = None
    self.size = 0

  def append(self, value):
    if self.tail:
      self.tail.next = new Node(value)
      self.tail = self.tail.next
    
    else:
      self.head = new Node(value)
      self.tail = self.head
    
    self.size += 1
    