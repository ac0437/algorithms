// JS: https://leetcode.com/problems/binary-search/submissions/1174319698/
// Deep dive: https://leetcode.com/problems/find-k-th-smallest-pair-distance/solutions/769705/python-clear-explanation-powerful-ultimate-binary-search-template-solved-many-problems/
function binary_search(array, start, end, target) {    
    while(start <= end) {
        let mid = Math.floor(start + (end - start ) / 2);
        let value = array[mid];
        if(value === target) {
            return true;
        } else if (value < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return false;
}

let numberArray = [1,2,3,4,5];
console.log(binary_search(numberArray, 0, numberArray.length, 2));
console.log(binary_search(numberArray, 0, numberArray.length, 0));
console.log(binary_search(numberArray, 0, numberArray.length, 6));