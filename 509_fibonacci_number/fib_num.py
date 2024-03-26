# Py3: https://leetcode.com/problems/fibonacci-number/submissions/1212935425/
def fib(n):

    def rec(n):
        if n == 0:
            return 0
        if n == 1:
            return 1
        
    return rec(n - 1) + rec(n - 2)

print(fib(2))