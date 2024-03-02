# Py3: https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/submissions/1178440378/
from typing import List

def smaller_than_current_number(nums: List[int]) -> List[int]:
    results: List[int] = []

    for i in range(len(nums)):
        count = 0
        for j in range(len(nums)):
            if nums[j] < nums[i]:
                count += 1
            if j == len(nums) - 1:
                results.append(count)
    
    return results

def smaller_than_current_number_index(nums: List[int]) -> List[int]:
    results = []
    sort = sorted(nums)

    for num in nums:
        results.append(sort.index(num))

    return results

print(smaller_than_current_number([8,1,2,2,3]))
print(smaller_than_current_number_index([8,1,2,2,3]))