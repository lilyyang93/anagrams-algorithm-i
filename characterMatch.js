exports.isCharacterMatch = function(string1, string2) {
    let str1= ''
    let str2= ''
    
    for (let letter of string1) {
        if (letter !== ' ') {
            str1+= letter
        }
    }

    for (let letter of string2) {
        if (letter !== ' ') {
            str2+= letter
        }
    }

    let firstString = str1.toLowerCase().split('').sort().join('')
    let secondString = str2.toLowerCase().split('').sort().join('')

    if (firstString == secondString) {
        return true
    } return false
};

exports.anagramsFor = function(word, listOfWords) {
    let matched = []
    let testWord = word.toLowerCase().split('').sort().join('')
    let obj = {}
    for (let w of listOfWords) {
        newWord = w.toLowerCase().split('').sort().join('')
        obj[w]=newWord
    }
    for (let w in obj) {
        if (obj[w] == testWord) [
            matched.push(w)
        ]
    }
    return matched

};
