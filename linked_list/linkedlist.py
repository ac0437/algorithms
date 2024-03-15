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
    if parent.prev == None:
        parent.prev = node
        node.next = parent
    elif parent.next == None:
        parent.next = node
        node.prev = parent
    else:
        nextNode = parent.next
        
        parent.next = node
        nextNode.prev = node
        node.prev = parent
        node.next = nextNode

    return node.val

def deleteNode(node):
    if node.prev == None:
        node.next.prev = None
        node.next = None
    elif node.next == None:
        node.prev.next = None
        node.prev = None
    else:
        prevNode = node.prev
        nextNode = node.next

        prevNode.next = nextNode
        nextNode.prev = prevNode
        node.prev = None
        node.next = None

    return node.val

def deleteNodeAt(root, index):
    current = root
    count = 0
    while count != index:
        current = current.next
        print("current: ", count, current)
        if current == None:
            print("We are out of bounds of the array and the element was not found.")
            return False
        count += 1
    
    deleteNode(current)
    return current.val

def getLength(root):
    current = root
    results = []
    while current != None:
        results.append(current.val)
        current = current.next

    return len(results)


def getNode(root, targetVal):
    current = root
    while current.val != targetVal:
        current = current.next
        print('print', current)
        if current == None:
            return False
    
    return True

def sumOfLinkedList(root):
    totalSum = 0
    current = root
    while current != None:
        totalSum += ord(current.val)
        current = current.next
    
    return totalSum
# iterate(a)
# print("Head: ", getHeadNode(a))
# print("Tails: ", getTailNode(a))
# print("Insert: ", insertNode(Node(1), a))
# # print("Delete: ", deleteNode(b))
# print("Delete Node At: ", deleteNodeAt(a, 2))
# iterate(a)
# print("Get Node (Found): ", getNode(a, 'd'))
# print("Get Node (Not Found): ", getNode(a, 'f'))
# print("Length: ", getLength(a))
# one = Node(1)
# print("Insert head: ", insertNode(one, a))
# iterate(one)
# print("Delete head: ", deleteNode(one))
# iterate(a)
# print("Insert tail: ", insertNode(one, d))
# iterate(a)
# print("Delete tail: ", deleteNode(one))
# iterate(a)
print(sumOfLinkedList(a))