
const numbers = [];
let total = 0;

do {
    let input = prompt('ведите число');

    if(input === null){

        for(let number of numbers){
            total += number;
        }

        console.log(`Общая сумма чисел равна ${total}`);
        break
    }

    input = Number(input);

    if(Number.isNaN(input)){
        alert('Было введено не число, попробуйте еще раз');
        continue
    }

    numbers.push(input);

}   while(true)

