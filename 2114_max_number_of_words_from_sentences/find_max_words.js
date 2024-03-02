// JS: https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/submissions/1188888334/
// TS: https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/submissions/1188866846/
function find_words(sentences) {
    let results = [];

    for(let i = 0; i < sentences.length; i++) {
        results.push(sentences.split(" ").length);
    }

    return Math.max(...results)
}