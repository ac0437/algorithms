# Py3: https://leetcode.com/problems/two-sum/submissions/1175440484/
# Solution: https://leetcode.com/problems/two-sum/

from typing import List
def two_sum(nums: List[int], target: int) -> List[int]:
    seen = dict()
    for index, value in enumerate(nums):
        pair = target - value
        if pair in seen:
            return [seen[pair], index]
        seen[value] = index

print(two_sum([3,3], 6))
print(two_sum([3,2,4], 6))