# Py3: https://leetcode.com/problems/concatenation-of-array/submissions/1177768293/
from typing import List
def concat_arrays(nums: List[int]) -> List[int]:
    for i in range(len(nums)):
        nums.append(nums[i])
    
    return nums

print(concat_arrays([1,2,3]))