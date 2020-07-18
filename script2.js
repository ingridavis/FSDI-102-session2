// challenge : save in a variable the info that you get from the prompt and display is on the console.

 
 var product =prompt("Enter product name");
console.log(product)

 var quantity =prompt("Enter quantity");
 console.log(quantity);

 var price =prompt("Enter price");
console.log(price);

let subtotal;

subtotal= quantity * price;
console.log(subtotal);

const taxes=1.16;
console.log(taxes);

let total;

total= subtotal * taxes;
console.log(total);













