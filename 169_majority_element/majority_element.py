# Py3: https://leetcode.com/problems/majority-element/submissions/1173271961/?envType=daily-question&envId=2024-02-12
from typing import List
def majority_element(nums: List[int]) -> int:
    if len(nums) == 1:
        return nums[0]
    
    count = {}
    max: int = 0
    maxValue: int = 0

    for num in nums:
        count[num] = None
    
    for num in nums:
        if count[num] == None:
            count[num] = 0
        else:
            count[num] += 1
    
    for key in count:
        if count[key] > max and maxValue != None:
            maxValue = key
            max = count[key]
    
    return maxValue
    

print(majority_element([3,2,3]))
print(majority_element([1]))
print(majority_element([6,6,6,7,7]))