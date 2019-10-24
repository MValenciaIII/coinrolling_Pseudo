var coins = {
    pennies: 200,
    nickles: 500,
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

for (const pennies in coins) {
    if (coins.hasOwnProperty(pennies)) {
        const element = coins[pennies];
        console.log(element);
    }
}


for (let i = 0; i < coins.pennies; i += 1) {
    const element = coins.pennies[i];
    if (i % pennyCoinWrapper == 0) {
        console.log( "a coin wrapper has been complete.");
    };
}
    // for (let i = 0; i = pennyCoinWrapper; i++) {
    //     console.log("1 coin wrapper has been wrapped.")
    // }
    let oneDollar = 100;
    let total = 0;
for (let prop in coins) {
if (prop == 'pennies') {
    let money = coins[prop];
    console.log(money/oneDollar + "$ is the amount in dollars.");
}
}


for (let j = 0; j < coins.nickels; j += 5) {
    const element = coins.nickels[j];
    if (j % nickelCoinWrapper == 0) {
        console.log(" a nickle wrapper has been complete.");
    };
    
};


for (let j = 0; j < coins.dimes; j += 10) {
    const element = coins.dimes[j];
    if (j % dimeCoinWrapper == 0) {
        console.log(" a dime wrapper has been complete.");
    };
    
};

for (let j = 0; j < coins.quarters; j += 25) {
    const element = coins.quarters[j];
    if (j % quarterCoinWrapper == 0) {
        console.log(" a quarter wrapper has been complete.");
    }
    
}

