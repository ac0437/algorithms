from typing import Optional
class Node:
    def __init__(self, val):
        self.val = val
        self. left = None
        self.right = None

    def __str__(self):
        return f"value: {self.val}, left: {self.left}, right: {self.right}"

#      a
#     / \
#    b   c
#   /\   /
#  d  e f
a = Node('a')
b = Node('b')
c = Node('c')
d = Node('d')
e = Node('e')
f = Node('f')

a.left = b
a.right = c
b.left = d
b.right = e
c.left = f

def postorder_traversal_recursion(root: Optional[Node]):
    results = []

    def recursion(root):
        if root == None:
            return None
        recursion(root.left)
        recursion(root.right)
        results.append(root.val)
    
    recursion(root)
    return results

print(postorder_traversal_recursion(a))