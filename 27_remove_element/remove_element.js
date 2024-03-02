// JS: https://leetcode.com/problems/remove-element/submissions/1177436212/
// TS: https://leetcode.com/problems/remove-element/submissions/1177438595/
// Solution: https://www.youtube.com/watch?v=Pcd1ii9P9ZI
function removeElement (nums, val) {
    let k = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};

console.log(removeElement([3,2,2,3], 3))
console.log(removeElement([0,1,2,2,3,0,4,2], 2))