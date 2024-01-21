function friends(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        console.log(num1);
    }
    else if(num2 > num3 && num2 > num1){
        console.log(num2);
    }
    else if(num3 > num1 && num3 > num2){
        console.log(num3);
    }
}

// friends(655, 294, 1008);


function maxOfThree(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}
console.log(maxOfThree(1, 2, 3)); // 3
console.log(maxOfThree(4, 3, 2)); // 4
