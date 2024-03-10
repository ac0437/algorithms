# source: https://www.youtube.com/watch?v=4ungd6NXFYI
from typing import List
def countingSort(key: int, array: List[int]):
    n = len(array)
    output = [0] * n
    countArray = [0] * 10

    for i in range(n):
        index = array[i] // key
        countArray[index % 10] += 1
    
    for i, in range(1,10):
        countArray[i] += countArray[i - 1]

    index = n - 1
    while index >= 0 :
        current = array[index] // key
        positonInArray = countArray[current % 10] - 1
        output[positonInArray] = array[i]
        countArray[index % 10] -= 1
        i -= 1

    for i in range(n):
        array[i] = output[i]

def radixSort(array):
    max = max(array)
    exp = 1
    while max // exp > 0:
        countingSort(exp, array)
        exp *= 10
    
    return array

arr = [170, 45, 75, 90, 802, 24, 2, 66]
radixSort(arr)
print("Sorted array: ", arr)