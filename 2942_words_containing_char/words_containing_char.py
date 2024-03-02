# Py3: https://leetcode.com/problems/find-words-containing-character/submissions/1178253850/

def find_words_contianing_char(words, char):
    indexes = []

    for i, word in enumerate(words):
        if char in word:
            indexes.append(i)
    
    return indexes

print(find_words_contianing_char(["leet","code"], 'e'));