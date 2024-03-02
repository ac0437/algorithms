# Py3: https://leetcode.com/problems/jewels-and-stones/submissions/1177502326/
def jewels_and_stones(jewels: str, stones: str) -> int:
    count = 0

    for i in range(len(stones)):
        if stones[i] in jewels:
            count += 1
    
    return count