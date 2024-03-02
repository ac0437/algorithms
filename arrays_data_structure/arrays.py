import array

buffer = array.array('i', [1, 2, 3, 4, 5])
unit8array = array.array('B', [10, 50, 200, 120])
print(buffer)
print(f"Unit 8 Array {unit8array}")

unit8array[0] = 45
print(f"Unit 8 Array [0]:  {unit8array}")

unit8array[2] = 45
print(f"Unit 8 Array [2]:  {unit8array}")