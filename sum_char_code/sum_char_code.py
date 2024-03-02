def sum_char_code(n: str) -> int:
    sum = 0
    for letter in n:
        sum += ord(letter)

    return sum

print(sum_char_code("Hello World!"))
print(sum_char_code("hello world!"))