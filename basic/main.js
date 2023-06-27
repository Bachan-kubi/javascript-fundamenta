// let drinks = "Lemon Sorbot";
// let stats = "";
// let glass= 10;

// while(glass>0){
//     stats = `${stats} ${glass} in the freeze! <br>`;
//     stats = `${stats} take one down and serve others! <br>`;
//     if(glass>1){
//         stats = `${stats} ${glass-1} in the freeze! <br>`;
//     }else{
//         stats= `${stats} Please make first and ${glass} call waiter later!`
//     }
//     glass--;
// }
// document.write(stats);

import constructor from "./constructor";

console.log(constructor)

var drink = "Energy Drink";
var lyrics = "";
var cans = 5;
while (cans > 0) {
 lyrics = lyrics + cans + " cans of " 
 + drink + " on the wall <br>";
 lyrics = lyrics + cans + " cans of " 
 + drink + "<br>";
 lyrics = lyrics + "Take one down, pass it around,<br>";
 if (cans > 1) {
 lyrics = lyrics + (cans-1) + " cans of " 
 + drink + " on the wall <br>";
 }
 else {
 lyrics = lyrics + "No more cans of " 
 + drink + " on the wall <br>";
 }
 cans = cans - 1;
}
document.write(lyrics);

