function calculateOdd(number) {
    let oddSum = 0;
    for (let index = 1; index < number; index+=2) {
        oddSum += number;
    }
    return oddSum;
}

function calculateEven(number) {
    let evenSum = 0;
    for (let index = 0; index < number; index+=2) {
        evenSum += index;
    }
    return evenSum;
}


function sumOfOddAndEvenNum(number) {
    let oddResult = calculateOdd(number);
    let evenSum = calculateEven(number);
    console.log( `Odd sum = ${oddResult}, Even sum = ${evenSum}`);
   
}


sumOfOddAndEvenNum(1000435)