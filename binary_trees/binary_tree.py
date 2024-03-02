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

def dfs(root):
    result = []
    stack = [root]

    while(root != None and len(stack) > 0):
        current = stack.pop()
        result.append(current.val)
        if current.right != None:
            stack.append(current.right)
        if current.left != None:
            stack.append(current.left)
        
    
    return result

def dfs_recursion(root):
    results = []
    if root:
        results.append(root.val)
        results += dfs_recursion(root.left)
        results += dfs_recursion(root.right)
       
    return results

def dfs_recursion_helper(root):
    result = []

    def recursion(rootNode):
        current = rootNode
        result.append(current.val)
        if rootNode.left:
            recursion(rootNode.left)
        if rootNode.right:
            recursion(rootNode.right)

    if root != None:
        recursion(root)

    return result

# print("DFS: ", dfs(a))
# print("DFS None: ", dfs(None))
# print("DFS Recusion: ", dfs_recursion(a))
# print("DFS Recusion Null: ", dfs_recursion(None))
print("DFS Recusion w/ Helper: ", dfs_recursion_helper(a))
print("DFS Recusion w/ Helper Null: ", dfs_recursion_helper(None))
        

