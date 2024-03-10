from typing import List
def minTotal(triangle: List[int]) -> int:
    minVals = []
    totalSum = 0
    print(triangle)
    for list in triangle:
        minVals.append(min(list))

    for n in minVals:
        totalSum += n
        print(totalSum)

    return totalSum


# print(minTotal([[2],[3,4],[6,5,7],[4,1,8,3]]))
# print(minTotal([[-10]]))
print(minTotal([[-1],[2,3],[1,-1,-3]]))