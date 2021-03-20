const findLongestWord = function(string) {
// твой код
    const wordsArr = string.split(' ');

    let longestWord = wordsArr[0];

    for(let i = 1; i <wordsArr.length; i+=1 ){       
        if(wordsArr[i].length > longestWord.length ){
            longestWord = wordsArr[i];
        }       
    }    
    return longestWord;
};

/*
* Вызовы функции для проверки работоспособности твоей реализации.
*/
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'