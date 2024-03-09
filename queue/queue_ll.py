class Node:
    def __init__(self, val) -> None:
        self.val = val
        self.prev = None
        self.next = None
    
    def __str__(self):
        prev = self.prev.val if self.prev else None
        next = self.next.val if self.next else None
        return f"value: {self.val}, prev: {prev}, next: {next}"

# a <-> b <-> c <-> d
a = Node('a')
b = Node('b')
c = Node('c')
d = Node('d')

a.next = b
b.prev = a
b.next = c
c.prev = b
c.next = d
d.prev = c

# This linked list is operating from left to right
# so the right most element is the first in element
# meaning the first element is at the tail.
def enqueue(node, head):
    head.prev = node
    node.next = node
    

    return node

def dequeue(tail):
    tail.prev.next = None
    tail.prev = None

    return tail

def getNode(nodeVal, tail):
    current = tail
    while current.val != nodeVal:
        current = current.prev
        if current.prev == None:
            return -1

    return nodeVal

def getLast(root):
    head = root
    while head.prev != None:
        head = head.prev
    
    return head

def peek(node):
    tail = node
    while tail.next != None:
        tail = tail.next
    
    return tail

one = Node(1)
enqueue(one, a)
print(getLast(d))
print(dequeue(d))
print(peek(a))