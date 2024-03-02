# Py3: https://leetcode.com/problems/number-of-good-pairs/submissions/1177989408/
# Solution: https://www.youtube.com/watch?v=BqhDFUo1rjs
from typing import List

def good_pairs(nums: List[int]) -> int:
    count = 0
    for i in range(len(nums)):
        for j in range(len(nums)):
            j = j + i + 1
            if j < len(nums):
                if nums[i] == nums[j]:
                    count += 1
    
    return count

def good_pairs_hm(nums: List[int]) -> int:
    count = 0
    pairs = {}

    for n in nums:
        if n in pairs:
            count += pairs[n]
            pairs[n] += 1
        else:
            pairs[n] = 1
    
    return count

print("_"*15)
print("For loops")
print("_"*15)
print(good_pairs([1,2,3,1,1,3]))
print(good_pairs([1,1,1,1]))
print(good_pairs([1,2,3]))

print("_"*15)
print("Hashmap")
print("_"*15)
print(good_pairs_hm([1,2,3,1,1,3]))
print(good_pairs_hm([1,1,1,1]))
print(good_pairs_hm([1,2,3]))