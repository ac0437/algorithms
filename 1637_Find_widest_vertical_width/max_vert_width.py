# Py3: https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/submissions/1213926189/
def max_vert_width(points):
    sortedPoints = sorted(points, key= lambda x: x[0])
    maxWidth = float('-inf')

    for i in range(1, len(points)):
        maxWidth = max(maxWidth, sortedPoints[i][0] - sortedPoints[i - 1][0])
    
    return maxWidth

print(max_vert_width([[8,7],[9,9],[7,4],[9,7]]))