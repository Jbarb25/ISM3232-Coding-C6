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


//Task 3: Arrow Function
const calculateBonus = (salary, performanceRating) =>  //Write an arrow function to calculate the bonus with salary and performance rating parameters.
    performanceRating === "Excellent" ? salary*0.2:  //is performance rating "excellent", yes then salary x 0.20 bonus
    performanceRating === "Good" ? salary*0.1:  //is performance rating "good", yes then salary x 0.10 bonus
    performanceRating === "Average" ? salary*0.05://is performance rating "average", yes then salary x 0.05 bonus
    0;   //if none of these apply, no bonus

console.log(`Bonus: $${calculateBonus(5000, "Excellent")}`)  //Call the arrow function and plug in the salary and performance rating
console.log(`Bonus: $${calculateBonus(7000, "Good")}`)