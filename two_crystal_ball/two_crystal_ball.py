from typing import List
import math

def two_crystal_ball(breaks: List[bool]) -> int:
    jumpAmount = math.floor(math.sqrt(len(breaks)))

    i = jumpAmount
    while(i < len(breaks)):
        if(breaks[i]):
            break
        i += jumpAmount
    
    i -= jumpAmount
    while(i < len(breaks)):
        if(breaks[i]):
            return i
        i += 1
    
    return -1

print(two_crystal_ball([False, False, False, True, True]))
print(two_crystal_ball([False, False, False]))
print(two_crystal_ball([False, False, False, False, False, False, True, True]))