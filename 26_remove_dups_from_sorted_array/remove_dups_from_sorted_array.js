// JS: https://leetcode.com/problems/remove-duplicates-from-sorted-array/submissions/1181006835/
// TS: https://leetcode.com/problems/remove-duplicates-from-sorted-array/submissions/1181005450/
function removeDuplicatesFromSortedArr(nums) {
    let hash = {};
    let count = 0;

    for(let i = 0; i < nums.length; i++) {
        if(hash[nums[i]] === undefined) {
            hash[nums[i]] = nums[i];
            nums[count] = nums[i];
            count++;
        }
    }

    return count;
}

console.log(removeDuplicatesFromSortedArr([1,1,2]))
console.log(removeDuplicatesFromSortedArr([0,0,1,1,1,2,2,3,3,4]))
console.log(removeDuplicatesFromSortedArr([-1,0,0,0,0,3,3]))
