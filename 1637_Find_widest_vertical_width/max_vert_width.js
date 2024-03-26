// JS: https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/submissions/1213939502/
// TS: https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/submissions/1213940677/
function max_vert_width(points) {
    let sortedPoints = points.sort((a,b) => a[0] - b[0]);
    let maxCount = -Infinity;
    console.log(sortedPoints);
    for(let i = 1; i < sortedPoints.length; i++) {
        maxCount = Math.max(maxCount, sortedPoints[i][0] - sortedPoints[i -1][0])
    }

    return maxCount;
}

console.log(max_vert_width([[58,71],[64,41],[96,14],[26,37],[11,67],[84,2],[72,0],[16,95],[74,100],[60,98],[8,45],[6,59],[69,32],[93,12],[26,56],[9,39],[61,84],[54,93],[43,47],[84,40],[95,82],[17,85],[99,41],[96,24],[83,10],[82,62],[26,81],[74,96],[53,0],[11,72],[51,35],[33,3],[33,52],[58,94],[89,92],[54,85]]))