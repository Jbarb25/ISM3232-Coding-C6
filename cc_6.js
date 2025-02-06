//Task 1: Function Declaration
function calculateProfit(costPrice, sellingPrice, unitsSold){  //Write a function that calculates total profit
    [profit = (sellingPrice - costPrice)* unitsSold]
    return profit}
//Calls the calculateProfit function, plugs the cost price, selling price, and units sold, and logs the outcome to console.
console.log(`Total Profit: ${calculateProfit(20,30,100)}`)
console.log(`Total Profit: ${calculateProfit(50,70,200)}`)