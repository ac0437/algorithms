# Py3: https://leetcode.com/problems/shuffle-the-array/submissions/1184195548/
from typing import List
import math
def shuffle_array(nums: List[int]) -> List[int]:
    results = []
    offset = math.floor(len(nums) / 2)

    for i in range(offset):
        results.append(nums[i])
        results.append(nums[offset + i])
    
    return results

print(shuffle_array([2,5,1,3,4,7]))
print(shuffle_array([1,2,3,4,4,3,2,1]))
print(shuffle_array([1,1,2,2]))
