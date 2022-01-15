const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
let i = 0
while(i < ingredients.length){
  console.log(ingredients[i])
  i++
}
console.log("-------------------------")
for(let x = 0; x< ingredients.length; x++){
  console.log(ingredients[x])
}
console.log("-------------------------")
for(let r = ingredients.length - 1; r >= 0; r--){
    console.log(ingredients[r])
}
