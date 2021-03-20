const calculateEngravingPrice = function(message, pricePerWord) {
    const arrOfWords = message.split(' ')
    const countWords = arrOfWords.length;
    const total = countWords * pricePerWord;
    return total;
};


// const calculateEngravingPrice = function(message, pricePerWord) {
//     const arrOfWords = message.split(' ')
//     const total = arrOfWords.length * pricePerWord;
//     return total;
// };

console.log(
calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
),
); // 80

console.log(
calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
),
); // 160

console.log(
calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
); // 240

console.log(
calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
); // 120