# Py3: https://leetcode.com/problems/remove-element/submissions/1177438595/
# Solution: https://www.youtube.com/watch?v=Pcd1ii9P9ZI

from typing import List
def remove_element(nums: List[int], val: int):
    k: int = 0

    for i in range(len(nums)):
        if nums[i] is not val:
            nums[k] = nums[i]
            k += 1
    
    return k
    