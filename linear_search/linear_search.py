from typing import List
def linear_search(arr: List[int], num: int):
    found_number = False
    try:
        arr.index(num)
        found_number = True
        return found_number
    except:
        return found_number

def manual_linear_search(arr: List[int], num: int):
    found_number = False
    for number in arr:
        if number == num:
            found_number = True
    
    return found_number

arr: List[int] = [1,2,3,4,5]
print(linear_search(arr, 4))
print(linear_search(arr, 6))
print(manual_linear_search(arr, 4))
print(manual_linear_search(arr, 6))