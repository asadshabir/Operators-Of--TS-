//Unary Operator
// Increment & Decrement  // ++    --
// Post & Pre    // Increment  & Decrement
//(post-Increment  format : ) variable ++   (pre-Increment format :) ++ variable 
// (post-decrement  format : ) variable -- (pre-decrement format :) -- veriable
var count = 0;
// Increment the count by 1
count++; // count = count+1
console.log("Count after increment", count);
// decrement the count by 1
var remainingItems = 1;
remainingItems--;
console.log("remaining items after decfement", remainingItems);
var x = 5;
// Post - Increment 
var post_Increment = x++;
console.log("Post increment value :", post_Increment);
console.log("value after post increment", x);
//Pre - Increment
var pre_Increment = ++x;
console.log("Post pre-increment value :", post_Increment);
console.log("value after pre-increment", x);
