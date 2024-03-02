// JS: https://leetcode.com/problems/jewels-and-stones/submissions/1177500417/
// TS: https://leetcode.com/problems/jewels-and-stones/submissions/1177498046/
function numOfJewsAndStones(jewels, stones) {
    let count = 0;

    for(let i = 0; i < stones.length; i++) {
        if(jewels.includes(stones[i])) {
            count++;
        }
    }

    return count;
}