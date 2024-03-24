# Py3: https://leetcode.com/problems/find-the-duplicate-number/submissions/1212746493/?envType=daily-question&envId=2024-03-24
def findDupTwoForLoops(nums):
    for i in range(len(nums)):
        for j in range(len(nums)):
            if nums[i] == nums[j]:
                return nums[i]
    
    return -1

def findDupWithSorting(nums):
    nums.sort()
    for i in range(len(nums)):
        if nums[i] == nums[i + 1]:
            return nums[i]
    
    return -1

print(findDupTwoForLoops([3,1,3,4,2]))
print(findDupWithSorting([3,1,3,4,2]))