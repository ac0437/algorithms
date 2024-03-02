# NeetCode: https://www.youtube.com/watch?v=7pnhv842keE
from typing import List
def majority_element(nums: List[int]) -> int:
    count = {}
    result, maxCount = 0,0

    for n in nums:
        count[n] = 1 + count.get(n,0)
        result = n if count[n] > maxCount else result
        maxCount = max(count[n], maxCount)

    return result

def majority_element_boyer_moore(nums: List[int]) -> int:
    result, count = 0, 0
    for n in nums:
        if count == 0:
            result = n
        count += (1 if n == result else - 1)
    return result