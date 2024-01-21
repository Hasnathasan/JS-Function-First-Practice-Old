function result(number){
    if(number >= 80){
        console.log("You got GPA-5");
    }
    else if(number >= 70){
        console.log("You got A");
    }
    else if(number >= 60){
        console.log("you got A-");
    }
    else if(number >= 50){
        console.log("you got B");
    }
    else if(number >= 40){
        console.log("you got C");
    }
    else if(number >= 33){
        console.log("you got D");
    }
    else if(number < 33){
        console.log("You are Fail");
    }
}

var myNumber = 85;
var shiriNumber = 95;
var biriNumber = 75;
var rubelNumber = 55;
var hasanNumber = 35;
var anikaNumber = 25;

var myresult = result(myNumber);
