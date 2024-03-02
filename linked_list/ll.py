class Node:
    def __init__(self, val) -> None:
        self.val = val
        self.prev = None
        self.next = None

a = Node('a')
b = Node('b')
c = Node('c')

a.next = b
b.prev = a
b.next = c
c.prev = b

def iterate(root):
    current = root
    while current != None:
        print("Current: ", current.val)
        if current.prev != None:
            print("Previous: ", current.prev.val)
        if current.next != None:
            print("Next: ", current.next.val)
        current = current.next

iterate(a)
