const checkForSpam = function(message) {
    const lowerCaseMessage = message.toLowerCase();
    const arrOfmessage = lowerCaseMessage.split(' ');
    let modernArr =[]

    // for(let mess of arrOfmessage){
    //     if(!mess.indexOf('[')){
    //         mess = mess.slice(1, -1)
    //         modernArr.push(mess)
    //     }
    //     modernArr.push(mess)
    // }
    
    // console.log(message);
    // return modernArr.includes('spam') || modernArr.includes('sale');
    return lowerCaseMessage.includes('spam') ||lowerCaseMessage.includes('sale');
// твой код
};

/*
* Вызовы функции для проверки работоспособности твоей реализации.
*/
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true