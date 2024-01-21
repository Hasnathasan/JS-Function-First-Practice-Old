// No.5 Problem


// var trafficSignal = "green";

// if(trafficSignal === "red"){
//     console.log("Do not cross the road");
// }
// else if(trafficSignal === "yellow"){
//     console.log('Stop! Wait some time');
// }
// else if(trafficSignal === "green"){
//     console.log("You can cross the road");
// }

// switch("green"){
//     case "red":
//         console.log("Do not cross the road");
//         break;
//     case "green":
//         console.log("You can cross the road"); 
//         break;
//     case "yellow":
//         console.log("Stop! Wait some time");
// }



// Problem No.4

function odd_even(num){
    switch(num){
        case (num % 2) === 0:
            console.log("This is a even number");
            break;
        case num % 2 !== 0:
            console.log("This is a odd number")
    }
}
odd_even(4)

function odd_even(num){
    if((num % 2) === 0){
        var ans = console.log("This is even");
    }
    else if((num % 2) !== 0){
        var ans = console.log("This is odd");
    }
    return ans
}

odd_even(5);

