// JS: https://leetcode.com/problems/find-the-duplicate-number/submissions/1212754531/?envType=daily-question&envId=2024-03-24
// TS: https://leetcode.com/problems/find-the-duplicate-number/?envType=daily-question&envId=2024-03-24

function findDupWithTwoForLoops(nums) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] === nums[j]) {
                return nums[i];
            }
        }
    }

    return -1;
}

function findDupWithSorting(nums) {
    nums.sort();
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] == nums[i +1]) {
            return nums[i];
        }
    }

    return -1;
}

console.log(findDupWithTwoForLoops([3,1,3,4,2]))
console.log(findDupWithSorting([3,1,3,4,2]))