from typing import Optional
import math
class Node:
    def __init__(self, val):
        self.val = val
        self. left = None
        self.right = None

    def __str__(self):
        return f"value: {self.val}, left: {self.left}, right: {self.right}"

#      1
#     / \
#    2   3
#   /\   /
#  4  15 16
a = Node(1)
b = Node(2)
c = Node(3)
d = Node(4)
e = Node(15)
f = Node(16)

a.left = b
a.right = c
b.left = d
b.right = e
c.left = f

def max_root_to_leaf_path(root):
    if root == None:
        return -math.inf
    if root.left == None and root.right == None:
        return root.val
    maxChild = max(max_root_to_leaf_path(root.left), max_root_to_leaf_path(root.right))  
    return root.val + maxChild

print(max_root_to_leaf_path(a))
    