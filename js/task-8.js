

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// indexOf


const searchArr = function(arr, item){
    let number;
    for(let i = 0; i < arr.length; i += 1){

        if(arr[i] === item){
            number = i;
            break
        } 
        else number = -1;

    }
    return number;
}

console.log(searchArr(logins, 'qwerty123'));
console.log(searchArr(logins, 'qwer2ty123'));


// includes


const isFinditem = function(arr, item){
    let value;
    for(const i of arr){
        if(i === item){
            value = true
            break
        }
        else value = false
    }
    return value;
}




console.log(isFinditem(logins, 'qwerty123'));
console.log(isFinditem(logins, 'qwer2ty123'));