// JS: https://leetcode.com/problems/concatenation-of-array/submissions/1177760773/
// TS: https://leetcode.com/problems/concatenation-of-array/submissions/1177760357/
function concat_array(nums) {
    let end = nums.length * 2;
    let index = nums.length - 1;
    for(let i = 0; nums.length < end; i++) {
        index++;
        nums[index] = nums[i];
    }

    return nums;
}

console.log(concat_array([1,2,3]));