let numbers = '';
for (let number1 = 10; number1 <= 20; number1++) {
    if (number1 === 20) {
        numbers += number1;
    } 
    else {
        numbers += number1 + ', ';
    }
}
console.log(numbers);


for (let number2 = 10; number2 <= 20; number2++) {
    console.log(number2 * number2);
}


let number3 = 1;
let multTable;
while (number3 <= 10) {
    multTable = number3 + ' x 7 = ' + (number3 * 7);
    number3++;
    console.log(multTable);
}


let sum = 0;
for (let number4 = 1; number4 <= 15; number4++) {
    sum = sum + number4;
}
console.log(sum);


let mult = 1;
for (let number5 = 15; number5 <= 35; number5++) {
    mult = mult * number5;
}
console.log(mult); 


let sumAv = 0;
let average = 0;
for (let number6 = 1; number6 <= 500; number6++) {
    sumAv = sumAv + number6; 
    average = sumAv / number6;
}
console.log(average);  


let sumEven = 0;
for (let number7 = 30; number7 <= 80; number7++) {
    if (number7 % 2 === 0) {
        sumEven = sumEven + number7;
    } 
}
console.log(sumEven);


for (let number8 = 100; number8 <= 200; number8++) {
    if (number8 % 3 === 0) {
        console.log(number8);
    }
}


let number9 = 6;
let quantity = 0;
let sumDivEven = 0;

for (let div = 1; div <= number9; div++) {
    if (number9 % div === 0) {        
        console.log(div);                 
    }
}

for (let div = 1; div <= number9; div++) {
    if (number9 % div === 0 && div % 2 === 0) { 
        quantity++;                             
    }
}
console.log(quantity);  

for (let div = 1; div <= number9; div++) {
    if (number9 % div === 0 && div % 2 === 0) { 
        sumDivEven = sumDivEven + div;                             
    }
}
console.log(sumDivEven);


let table;                                                               
for (let numberA = 1; numberA <= 10; numberA++) {
    for (let numberB = 1; numberB <= 10; numberB++) {
    table = numberA + ' x ' + numberB + ' = ' + numberA * numberB;
    console.log(table);
    }
}


    







 
    







