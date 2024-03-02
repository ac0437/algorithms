# Py3: https://leetcode.com/problems/binary-search/submissions/1174313614/
import math
from typing import List

def binary_search(array: List[int], start: int, end: int, target: int) -> bool:
    while start <= end:
        mid: int = math.floor(start + (end - start) / 2)
        value: int = array[mid]

        if value == target:
            return True
        elif value < target:
            start = mid + 1
        else:
            end = mid - 1

    return False

numberArray: List[int] = [1,2,3,4,5]
print(binary_search(numberArray, 0, len(numberArray), 2))
print(binary_search(numberArray, 0, len(numberArray), 0))
print(binary_search(numberArray, 0, len(numberArray), 6))