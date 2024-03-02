// JS: https://leetcode.com/problems/majority-element/submissions/1173251767?envType=daily-question&envId=2024-02-12
// TS: https://leetcode.com/problems/majority-element/submissions/1173250289?envType=daily-question&envId=2024-02-12
function majorityElement(nums) {
    if(nums.length === 1) return nums[0];
    const count = {};
    let max = 0;
    let maxValue = 0;

    for(let i = 0; i < nums.length; i++) {
        if(count[nums[i]] !== undefined) count[nums[i]]++
        else count[nums[i]] = 0
    }

    for(let key in count) {
        if(count[key] > max) {
            maxValue = Number(key);
            max = count[key];
        }
    }
    return maxValue;
};

console.log(majorityElement([3,2,3]))
console.log(majorityElement([1]))
console.log(majorityElement([6,6,6,7,7]))