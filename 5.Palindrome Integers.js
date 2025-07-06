function CheckIfPolindrome(arr) {
    let arrOfStringNums = []
    for (const number of arr) {
        arrOfStringNums.push(number.toString());
    }
    
    for (const stringNum of arrOfStringNums) {
        let splitNum = stringNum.split("")
        let reversedNum = splitNum.reverse()
        if (stringNum === reversedNum.join("")) {
           console.log("true");
           continue;
        }
        console.log("false");
    }
    
}


CheckIfPolindrome([123,323,421,121])