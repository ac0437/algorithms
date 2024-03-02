# Py3: https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/submissions/1188900697/
from typing import List

def find_words(senetences: List[str]):
    results = []

    for s in senetences:
        results.append(len(s.split()))

    return 0 if len(results) == 0 else results[0] if len(results) else max(*results)

print(find_words(["rjtrogrmvpzm vezxyl irqufo"]))
print(find_words([]))