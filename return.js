// function sum(num1, num2){
//     console.log(num1, num2);
//     var sum = num1 + num2;
//     return(sum);
// }


// console.log(sum(15, 95))

function singara(money) {
    singaraPrice = 15;
    var ferot = money % singaraPrice;
    singaraqunatity = (money - ferot) / singaraPrice;
    return [singaraqunatity, ferot];
}

var amiKhabo = singara(220);
console.log(amiKhabo);