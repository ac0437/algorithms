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

def iterate(root):
    current = root
    while current != None:
        print("Current: ", current.val)
        if current.prev != None:
            print("Previous: ", current.prev.val)
        if current.next != None:
            print("Next: ", current.next.val)
        current = current.next

def getHeadNode(root):
    head = root
    while head.prev != None:
        head = head.prev
    
    return head.val

def getTailNode(root):
    tail = root
    while tail.next != None:
        tail = tail.next
    
    return tail.val

def insertNode(node, parent):
    nextNode = parent.next
    
    parent.next = node
    nextNode.prev = node
    node.prev = parent
    node.next = nextNode

    return node.val

def deleteNode(node):
    prevNode = node.prev
    nextNode = node.next

    prevNode.next = nextNode
    nextNode.prev = prevNode
    node.prev = None
    node.next = None

    return node.val


iterate(a)
print("Head: ", getHeadNode(a))
print("Tails: ", getTailNode(a))
print("Insert: ", insertNode(Node(1), a))
print("Delete: ", deleteNode(b))
iterate(a)
