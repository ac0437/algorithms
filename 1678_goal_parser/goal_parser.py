# Py3: https://leetcode.com/problems/goal-parser-interpretation/submissions/1178926345/
def goal_parser(string: str) -> str:
    result = ''
    for i, char in enumerate(string):
        if char == "G":
            result += "G"
        elif char == "(" and string[i+1] == ")":
            result += "o"
        elif char == "a":
            result += "al"
    
    return result

print(goal_parser("G()(al)"))
print(goal_parser("G()()()()(al)"))