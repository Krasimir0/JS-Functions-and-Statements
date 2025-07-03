function sum(firstNum, SecondNum) {
    return firstNum + SecondNum
}

function subtract(firstNum, secondNum, thirdNum) {
    let result = sum(firstNum, secondNum);
    return result - thirdNum;
}

subtract(23, 6, 10)