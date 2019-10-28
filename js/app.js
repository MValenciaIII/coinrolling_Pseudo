var coins = {
    pennies: 200,
    nickels: 500,
    dimes: 300,
    quarters: 64
};

var penny = .01;
var nickel = .05;
var dime = .10;
var quarter = .25;

var pennyCoinWrapper = 50;
var  nickelCoinWrapper = 40;
var  dimeCoinWrapper = 50;
var  quarterCoinWrapper = 40;



// var peopleData = [];

// for (let i = 0; i < data.length; i += 5) {
//     peopleData.push({
//         fname: data[i],
//         lname: data[i + 1],
//         email: data[i + 2],
//         sex: data[i + 3],
//         ip: data[i + 4]
//     });
// }

// console.log(peopleData);




// let penny1 = ""
// for (let penny in coins.nickles) {
//  penny1 += coins.nickles[penny]
//  console.log(penny);
// }
// console.log(penny1);

// for (const pennies in coins) {
//     if (coins.hasOwnProperty(pennies)) {
//         const element = coins[pennies];
//         console.log(element);
//     }
// }


// for (let i = 0; i < coins.pennies; i += 1) {
//     const element = coins.pennies[i];
//     if (i % pennyCoinWrapper == 0) {
//         console.log( "a coin wrapper has been complete.");
//     };
// }
    // for (let i = 0; i = pennyCoinWrapper; i++) {
    //     console.log("1 coin wrapper has been wrapped.")
    // }
    let oneDollar = 100;
    let total = 0;
for (let change in coins) {
if (change == 'pennies') {
    let money = coins[change];
    console.log(money*penny + "$ is the amount of pennies in dollars.");

    for (let i = 0; i < money; i += 1) {
    const element = money[i];
    if (i % pennyCoinWrapper == 0) {
        console.log( "a penny wrapper has been complete. With " + money % pennyCoinWrapper + " pennies being left over.");
        };
    };
}

 else if (change == 'nickels') { 
    let money = coins[change];
    console.log(money*nickel  + "$ is the amount nickles in dollars");

    for (let i = 0; i < money; i += 5) {
    const element = money[i];
    if (i % nickelCoinWrapper == 0) {
        console.log(" a nickle wrapper has been complete. With " + money % nickelCoinWrapper + " nickles being left over.");
        };
    };
}

else if (change == 'dimes') {
    let money = coins[change];
    console.log(money*dime + "$ is the amount of dimes in dollars.");

    for (let i = 0; i < money; i += 10) {
    const element = money[i];
    if (i % dimeCoinWrapper == 0) {
        console.log(" a dime wrapper has been complete. With " + money % dimeCoinWrapper + " dimes being left over.");
        };
    };
}

else if (change == 'quarters') {
    let money = coins[change];
    console.log(money*quarter + "$ is the amount of quarters in dollars")

    for (let i = 0; i < money; i += 25) {
    const element = money[i];
    if (i % quarterCoinWrapper == 0) {
        console.log(" a quarter wrapper has been complete. With " + money % quarterCoinWrapper + " quarters being left over.");
        } 
    }
}
}
console.log(coins.pennies*penny + coins.nickels*nickel + coins.dimes*dime + coins.quarters*quarter + "$ is the total amount altogether");



// for (let j = 0; j < coins.nickels; j += 5) {
//     const element = coins.nickels[j];
//     if (j % nickelCoinWrapper == 0) {
//         console.log(" a nickle wrapper has been complete.");
//     };
    

// };


// for (let j = 0; j < coins.dimes; j += 10) {
//     const element = coins.dimes[j];
//     if (j % dimeCoinWrapper == 0) {
//         console.log(" a dime wrapper has been complete.");
//     };
    
// };



var challengeData = ['dime','dime','dime','penny','nickel','penny','dime','quarter','dime','nickel','nickel','dime','quarter','nickel','penny','dime','nickel','dime','dime','dime','quarter','nickel','quarter','dime','nickel','penny','dime','penny','nickel','quarter','quarter','quarter','dime','nickel','dime','quarter','dime','penny','penny','nickel','penny','penny','dime','nickel','penny','penny','quarter','quarter','nickel','nickel','penny','dime','nickel','quarter','nickel','nickel','quarter','quarter','dime','nickel','penny','dime','dime','nickel','penny','quarter','quarter','quarter','dime','nickel','nickel','dime','quarter','quarter','nickel','penny','quarter','penny','quarter','nickel','dime','quarter','dime','penny','quarter','nickel','nickel','nickel','quarter','penny','nickel','nickel','dime','dime','dime','quarter','quarter','quarter','penny','penny','dime','dime','dime','penny','quarter','nickel','quarter','quarter','penny','nickel','penny','nickel','nickel','penny','quarter','nickel','dime','quarter','nickel','dime','penny','nickel','nickel','penny','penny','penny','dime','quarter','quarter','quarter','penny','dime','nickel','dime','dime','penny','quarter','penny','quarter','penny','dime','dime','nickel','dime','penny','penny','nickel','penny','nickel','quarter','dime','dime','nickel','nickel','nickel','dime','dime','dime','quarter','penny','dime','nickel','quarter','nickel','penny','nickel','penny','nickel','penny','nickel','nickel','penny','dime','nickel','dime','dime','quarter','quarter','quarter','penny','dime','penny','dime','dime','penny','penny','nickel','nickel','penny','quarter','nickel','quarter','dime','nickel','quarter','nickel','penny','dime','quarter','nickel','penny','quarter','quarter','penny','quarter','dime','penny','dime','nickel','penny','dime','quarter','nickel','quarter','quarter','quarter','dime','quarter','dime','quarter','nickel','penny','penny','quarter','quarter','penny','dime','penny','dime','penny','nickel','nickel','dime','penny','quarter','penny','quarter','nickel','quarter','penny','nickel','quarter','dime','quarter','dime','penny','dime','dime','quarter','penny','penny','nickel','nickel','quarter','nickel','quarter','dime','quarter','penny','penny','penny','nickel','nickel','quarter','penny','quarter','quarter','penny','nickel','dime','penny','quarter','nickel','dime','penny','penny','quarter','penny','penny','dime','nickel','dime','penny','dime','nickel','nickel','dime','dime','penny','nickel','penny','dime','dime','nickel','dime','dime','penny','penny','dime','penny','nickel','quarter','nickel','quarter','quarter','penny','nickel','penny','quarter','nickel','nickel','quarter','penny','penny','nickel','nickel','penny','penny','nickel','quarter','nickel','dime','nickel','nickel','penny','quarter','dime','dime','nickel','dime','nickel','nickel','dime','quarter','quarter','nickel','penny','dime','dime','dime','dime','quarter','nickel','nickel','dime','nickel','quarter','nickel','dime','quarter','nickel','dime','quarter','quarter','penny','quarter','nickel','dime','quarter','penny','penny','nickel','nickel','quarter','dime','penny','dime','dime','quarter','dime','penny','quarter','penny','penny','nickel','nickel','nickel','penny','penny','quarter','penny','penny','quarter','dime','quarter','nickel','quarter','nickel','penny','penny','penny','dime','dime','dime','dime','nickel','dime','quarter','nickel','dime','nickel','dime','dime','penny','dime','quarter','nickel','penny','nickel','penny','penny','quarter','dime','nickel','nickel','nickel','penny','nickel','dime','penny','quarter','quarter','dime','quarter','penny','nickel','nickel','penny','dime','dime','nickel','nickel','dime','penny','nickel','penny','quarter','dime','nickel','dime','penny','penny','quarter','dime','quarter','penny','penny','nickel','quarter','quarter','quarter','dime','penny','dime','dime','dime','quarter','penny','penny','dime','quarter','dime','penny','quarter','dime','dime','dime'
]


var coinchange = {
    pennies: 0,
    nickels: 0,
    dime: 0,
    quarter: 0
};

challengeData.forEach(coins2 => {

    if (coins2 == 'dime') {        
        coinchange.dime++;
    }
    else if (coins2 == 'nickel') {        
        coinchange.nickels++;
    }
    else if (coins2 == 'penny') {        
        coinchange.pennies++;
    }
    else if (coins2 == 'quarter') {        
        coinchange.quarter++;
    }
}
);
//while for behavior
//foreach every record.

// for (let i = 0; i < challengeData.length; i++) {
//     if (i = 'dime') {        
//         coinchange.dime++;
//     }
// }
console.log(coinchange);


