from typing import List

def remove_dups_from_sorted_array(nums: List[int]) -> int:
    hash = dict()
    count = 0

    for n in nums:
        if hash.get(n) == None:
            hash[n] = n
            nums[count] = n
            count += 1
    
    return count

print(remove_dups_from_sorted_array([1,1,2]))
print(remove_dups_from_sorted_array([0,0,1,1,1,2,2,3,3,4]))
print(remove_dups_from_sorted_array([-1,0,0,0,0,3,3]))