from typing import Optional
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
#  4  5 6
a = Node(1)
b = Node(2)
c = Node(3)
d = Node(4)
e = Node(5)
f = Node(6)

a.left = b
a.right = c
b.left = d
b.right = e
c.left = f

def tree_sum_bfs(root: Optional[Node]) -> int:
    count = 0
    queue = [root]

    while(len(queue) > 0):
        current = queue.pop(0)
        count += current.val

        if current.left != None:
            queue.append(current.left)
        if current.right != None:
            queue.append(current.right)
    
    return count

def tree_sum_dfs(root: Optional[Node]) -> int:
    count = 0
    stack = [root]

    while(len(stack) > 0):
        current = stack.pop()
        count += current.val

        if current.left != None:
            stack.append(current.left)
        if current.right != None:
            stack.append(current.right)
    
    return count


def tree_sum_dfs_recursion(root: Optional[Node]) -> int:
    count = 0
    def recursion(root):
        nonlocal count
        if root != None:
            count += root.val
            if root.left != None:
                recursion(root.left)
            if root.right != None:
                recursion(root.right)

    recursion(root)
        
    return count

print(tree_sum_bfs(a))
print(tree_sum_dfs(a))
print(tree_sum_dfs_recursion(a))
print(tree_sum_bfs(b))
print(tree_sum_dfs(b))
print(tree_sum_dfs_recursion(b))