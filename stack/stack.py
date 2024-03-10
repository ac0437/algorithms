class Node:
    def __init__(self, val) -> None:
        self.val = val
        self.prev = None
        self.next = None
    
    def __str__(self):
        prev = self.prev.val if self.prev else None
        next = self.next.val if self.next else None
        return f"value: {self.val}, prev: {prev}, next: {next}"

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

def addNode(newNode, node):
    current = node
    while current != None:
        current = current.next
        if current.next == None:
            current.next = newNode
            newNode.prev = current
            break
    
    return newNode

def takeNode(node):
    current = node
    while current != None:
        current = current.next
        if current.next == None:
            current.prev.next = None
            current.prev = None
            break
    
    return current

def peek(node):
    current = node
    while current != None:
        current = current.next
        if current.next == None:
            return current
        
    return -1

print(peek(a))
print(addNode(Node(1), a))
print(peek(a))
print(takeNode(a))
print(peek(a))
