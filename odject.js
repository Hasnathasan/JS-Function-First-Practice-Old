var myRoom = {
    color: 'seagreen',
    khat: 1,
    khatPrice: 5000,
    computer: 1,
    computerPrice: 40000
}

console.log(myRoom.computerPrice);




var myComputer = {
    configeration: "intel cor i-5",
    price: 40000,
    hardDisk: '500gb'
}


var identity = myComputer.configeration;
console.log(identity);
var price = myComputer['price'];
var property = 'price';
var price = myComputer[property];
console.log(price);

myComputer.price = 50000;
console.log(myComputer.price);
console.log(myComputer);

var properties = Object.keys(myComputer);
console.log(properties);
var values = Object.values(myComputer);
console.log(values);
myComputer.hardDisk = "1TB";
myComputer['hardDisk'] = '2Tb';
console.log(myComputer);

var myComputer = {
    configeration: "intel cor i-5",
    price: 40000,
    hardDisk: '500gb'
}

var propertyName = Object.keys(myComputer);


for (i = 0; i < propertyName.length; i++) {
    var property = propertyName[i];
    console.log(property);
    console.log(myComputer[property]);
}

for (var propertyName in myComputer) {
    console.log(propertyName, myComputer[propertyName]);
}





// let myComputerConfiguration = {
//     ComputerName : 'Dell',
//     Configuration : 'intel Cor i 5',
//     price : 40000,
//     Older : '2 year'
// }

// console.log(Object.keys(myComputerConfiguration));
// console.log(Object.values(myComputerConfiguration));