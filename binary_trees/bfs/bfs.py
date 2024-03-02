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
# a,b,c,d,e,f
def bfs(root: Optional[Node]) -> List[Node]:
    queue = []
    def recursion(rootNode):
        if rootNode == None:
            return None
        if rootNode != None:
           current = rootNode
           if current != None:
                queue.append(current.val)
                if current.left != None:
                    queue.append(current.left.val)
                if current.right != None:
                    queue.append(current.right.val)
        if current.left != None:
            recursion(current.left)
        if current.right != None:
            recursion(current.right)
        
    recursion(root)
    return list(dict.fromkeys(queue))

print(bfs(a))
