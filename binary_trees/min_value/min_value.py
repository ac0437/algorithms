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
#    2   0
#   /\   /
#  4  5 -1
a = Node(10)
b = Node(2)
c = Node(0)
d = Node(4)
e = Node(5)
f = Node(-1)

a.left = b
a.right = c
b.left = d
b.right = e
c.left = f

def find_min_value_bfs(root: Optional[Node]) -> int:
    queue = [root]
    results = []

    while(len(queue) > 0):
        current = queue.pop(0)
        results.append(current.val)

        if current.left != None:
            queue.append(current.left)
        if current.right != None:
            queue.append(current.right)
    

    return min(*results)

def find_min_value_dfs(root: Optional[Node]) -> int:
    stack = [root]
    results = []

    while(len(stack) > 0):
        current = stack.pop()
        results.append(current.val)

        if current.left != None:
            stack.append(current.left)
        if current.right != None:
            stack.append(current.right)
    
    return min(*results)


def find_min_value_dfs_recursion(root: Optional[Node]) -> int:
    if root == None:
        return 0
    return min(root.val, find_min_value_dfs_recursion(root.left), find_min_value_dfs_recursion(root.right))


print(find_min_value_bfs(a))
print(find_min_value_dfs(a))
print(find_min_value_dfs_recursion(a))