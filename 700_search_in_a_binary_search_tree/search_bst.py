# Py3: https://leetcode.com/problems/search-in-a-binary-search-tree/submissions/1187019797/
from typing import Optional

class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right  = None

#      4
#     / \
#    2   7
#   / \
#  1   3
root = Node(4)
root.left = Node(2)
root.right = Node(7)
root.left.left = Node(1)
root.left.right = Node(3)

def find_target(root: Optional[Node], val: int) -> Optional[Node]:
    result = []

    def recursion(root):
        current = root
        if current.val == val:
            result.append(current.val)
            if current.left:
                result.append(current.left.val)
            if current.right:
                result.append(current.right.val)
        elif current.left:
            recursion(current.left)
        elif current.right:
            recursion(current.right)
    
    recursion(root)

    return result

# Leetcode solution
def find_target_LC(root: Optional[Node], val: int) -> Optional[Node]:
    def recursion(root):
        if not root:
            return None
        
        if root.val > val:
            return recursion(root.left)
        elif root.val < val:
            return recursion(root.right)
        else:
            return root.val
    
    return recursion(root)

print(find_target(root, 2))
print(find_target(root, 5))
print(find_target_LC(root, 2))
print(find_target_LC(root, 5))