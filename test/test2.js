let w1 = window.prompt("Enter first word");
let w2 = window.prompt("Enter second word");
alert(check(w1, w2))
function check(word1, word2) {
    word1 = word1.split('').sort().join('')
    word2 = word2.split('').sort().join('')
    if(word1 == word2)
        return true
    return false
}