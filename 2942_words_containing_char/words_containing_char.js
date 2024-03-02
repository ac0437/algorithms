// JS: https://leetcode.com/problems/find-words-containing-character/submissions/1178251694/
// TS: https://leetcode.com/problems/find-words-containing-character/submissions/1178253035/

function findWordsContainingChar(words, char) {
    let indexes = [];

    for(let i = 0; i < words.length; i++) {
        if(words[i].includes(char)) {
            indexes.push(i)
        }
    }

    return indexes;
}

console.log(findWordsContainingChar(["leet","code"], 'e'));