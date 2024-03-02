// JS: https://leetcode.com/problems/goal-parser-interpretation/submissions/1178338008/
// TS: https://leetcode.com/problems/goal-parser-interpretation/submissions/1178344590/
function goalParser(str) {
    return str.replaceAll("()", "o").replaceAll("(al)", "al")
}

console.log(goalParser("G()(al)"));
console.log(goalParser("G()()()()(al)"));
console.log(goalParser("(al)G(al)()()G"));