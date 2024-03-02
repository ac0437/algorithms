from typing import List

def bubble_sort(arr: List[int]) -> int:
    for i in range(len(arr)):
        for j in range(len(arr)):
            j = j + 1 + i
            print(j)
            current = arr[i]
            if j < len(arr):
                if current > arr[j]:
                    arr[i] = arr[j]
                    arr[j] = current
    return arr

print(bubble_sort([1,3,7,4,2]))