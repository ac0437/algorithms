def balanceString(s):
    count = 0
    balance = 0

    for l in s:
        if l == "R":
            count += 1
        if l == "L":
            count -= 1
        if count == 0:
            balance += 1

    return balance

print(balanceString("RLRRLLRLRL"))