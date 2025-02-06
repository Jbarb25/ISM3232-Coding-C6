//Task 1: Function Declaration
function calculateProfit(costPrice, sellingPrice, unitsSold){  //Write a function that calculates total profit
    [profit = (sellingPrice - costPrice)* unitsSold]
    return profit}
//Calls the calculateProfit function, plugs the cost price, selling price, and units sold, and logs the outcome to console.
console.log(`Total Profit: $${calculateProfit(20,30,100)}`)
console.log(`Total Profit: $${calculateProfit(50,70,200)}`)


//Task 2: Function Expression
function calculateSalesTax(amount, taxRate){   //Declare a function that calculates sales tax
    [salesTax = amount * taxRate]
    return salesTax}
//Call the function to plug in the amount and tax rate, then return the outcome to the console
console.log(`Sales Tax: $${calculateSalesTax(100, 0.07)}`)
console.log(`Sales Tax: $${calculateSalesTax(500, 0.1)}`)