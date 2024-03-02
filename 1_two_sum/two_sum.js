// JS: https://leetcode.com/problems/two-sum/submissions/1175396187/
// TS: https://leetcode.com/problems/two-sum/submissions/1175401148/
// Solution: https://leetcode.com/problems/two-sum/

// Note this solution is still O(n^2)
function twoSum(nums, target) {
    let indexes = [];
    for(let i = 0; i < nums.length; i++) {
        const compliment = target - nums[i];
        let complimentIndex = nums.indexOf(compliment)

        if(complimentIndex !== i && complimentIndex > -1) {
            indexes.push(i, complimentIndex)
        }
    }

    return [...new Set(indexes)];
};

function twoSumCondensed(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        const compliment = target - nums[i];
        let complimentIndex = nums.indexOf(compliment)

        if(complimentIndex !== i && complimentIndex > -1) {
            return [i, complimentIndex];
        }
    }
};

// O(n)
function twoSum_On(nums, target){
    let seen = new Map();

    for(let i = 0; i < nums.length; i++) {
        let pair = target - nums[i];
        if(seen.get(pair)){
            return [seen.get(pair), i];
        }
        seen.set(nums[i], i);
    }
}



console.log(twoSum([3,3], 6));
console.log(twoSum([3,2,4], 6));