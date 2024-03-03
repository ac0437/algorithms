from typing import Optional, List
class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
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

def find_target_dfs(root: Optional[Node] | None, target: str) -> bool:
    if root == None:
        print("Root is None: ")
        return None
    
    stack = [root]

    while(len(stack) > 0):
        current = stack.pop()

        if current.val == target:
            return True
        if current.left != None:
            stack.append(current.left)
        if current.right != None:
            stack.append(current.right)
        
    return False

def find_target_dfs_recursion(root: Optional[Node], target: str) -> bool:
    def recursion(root):
        current = root

        if current == target:
            return True
        if current.right != None:
            recursion(current.right)
        if current.left != None:
            recursion(current.left)
    
    recursion(root)

    return False



def find_target_bfs(root: Optional[Node], target: str) -> bool:
    if root == None:
        print("Root is None: ")
        return None
    
    queue = [root]

    while(len(queue) > 0):
        current = queue.pop(0)

        if current.val == target:
            return True
        if current.left != None:
            queue.append(current.left)
        if current.right != None:
            queue.append(current.right)
    
    return False

print("DFS")
print(find_target_dfs(a, "f"))
print(find_target_dfs(a, "j"))
print(find_target_dfs(None, None))

print("DFS Recursion")
print(find_target_dfs(a, "f"))
print(find_target_dfs(a, "j"))
print(find_target_dfs(None, None))

print("BFS")
print(find_target_bfs(a, "f"))
print(find_target_bfs(a, "j"))
print(find_target_bfs(None, None))
