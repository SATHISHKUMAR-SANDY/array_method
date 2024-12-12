//TASK 1

let fruit = ["APPLE","BANANA","ORENGE"];
console.log(fruit.pop());
console.log(fruit.push("PINAPPLE"));
console.log(fruit);

//TASK 2

let rool_num = [111,112,115,116];
console.log(rool_num.splice(2,0,113,114));
console.log(rool_num);

//TASK 3

let original_arr = [1,2,3,7,6,4,5];
console.log(original_arr.slice(0,7))



//TASAK 4

let num_array= [1,2,3,4,5];
let letter_array = ["one","Two","Three","FOUR","five"];
console.log(num_array.concat(letter_array));


//TASK 5

let values = [1,3,2,4,5,7,6];
let map_operation = values.map(values=>values*2);
let filter_operation = map_operation.filter(map_fillter_2=>map_fillter_2%2==0);
console.log(filter_operation);














