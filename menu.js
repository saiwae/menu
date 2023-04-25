const readline= require('readline-sync');

let order = [];
let total = [];
console.log('sandwiches choices:\nchicken: $5.25, beef: $6.25, tofu: $5.75');
chicken = 5.25
beef = 6.25
tofu = 5.75
order[0] = readline.question('sandwich of your choice: ');
if (order[0] == 'beef' || order[0] == 'Beef'){
    total[0] = 6.25;
} else if (order[0] == 'chicken' || order[0] == 'Chicken'){
    total[0] = 5.25;
} else if (order[0] == 'tofu' || order[0] == 'Tofu'){
    total[0] = 5.75;
}
console.log(order);
drink = readline.question('would you like a drink? (yes/no): ');
if (drink == "yes" || drink == "Yes"){
    console.log('drink size choices:\nsmall: $1.00, medium: $1.75, large: $2.25');
    order[1] = readline.question('size of your choice: ');
    if (order[1] == 'small' || order[1] == 'Small'){
        total[1] = 1;
    } else if (order[1] == 'medium' || order[1] == 'Medium'){
        total[1] = 1.75;
    } else if (order[1] == 'large' || order[1] == 'Large'){
        total[1] = 2.25;
    }
} else {
    total[1] = 0;
}
console.log(order);
console.log(`total: $${total[0]+total[1]}`);

fries = readline.question('would you like fries? (yes/no): ');
if (fries == "yes" || fries == "Yes"){
    console.log('fries size choices:\nsmall: $1.00, medium: $1.50, large: $2.00');
    order[2] = readline.question('size of your choice: ');
    if (order[2] == 'small' || order[2] == 'Small'){
        let yn = readline.question('would you like to mega-size your fries? (yes/no): ');
        if (yn == 'yes' || yn == 'Yes'){
            order[2] = 'large';
            total[2] = 2;
        } else {
            total[2] = 1;
        }
    } else if (order[2] == 'medium' || order[2] == 'Medium'){
        total[2] = 1.50;
    } else if (order[2] == 'large' || order[2] == 'Large'){
        total[2] = 2;
    }
} else {
    total[2] = 0;
}
console.log(order);
console.log(`total: $${total[0]+total[1]+total[2]}`);

sauces = readline.question('would you like a ketchup? (yes/no): ');
if (sauces == "yes" || sauces == "Yes")
    console.log('one ketchup packet costs $0.25');
total[3] = Number(readline.question('how many would you like: '))*.25;
console.log(order);
console.log(`total: $${total[0]+total[1]+total[2]+total[3]}`);