const readline= require('readline-sync');

let order = [];
console.log('sandwiches choices:\nchicken: $5.25, beef: $6.25, tofu: $5.75');
chicken = 5.25
beef = 6.25
tofu = 5.75
order[0] = readline.question('sandwich of your choice: ');
console.log(order[0]);
drink = readline.question('would you like a drink? (yes/no): ');
small = 1
medium = 1.75
large = 2.25
if (drink == 'yes', 'Yes', 'YES'){
    console.log('drink size choices:\nsmall: $1.00, medium: $1.75, large: $2.25');
    order[1] = readline.question('size of your choice: ');
} else {
}
console.log(order);