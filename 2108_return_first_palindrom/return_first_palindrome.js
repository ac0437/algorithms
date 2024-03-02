// JS: https://leetcode.com/problems/find-first-palindromic-string-in-the-array/?envType=daily-question&envId=2024-02-13
// TS: https://leetcode.com/problems/find-first-palindromic-string-in-the-array/?envType=daily-question&envId=2024-02-13
function firstPalindrome (words) {
    for(let i = 0; i < words.length; i++) {
        if (words[i] === words[i].split("").reverse().join("")) {
            return words[i];
        }
    }

    return "";
};