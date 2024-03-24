def sum(number):
    # base case
    if number == 1:
        return 1
    
    return number + sum(number - 1)

print(sum(10))