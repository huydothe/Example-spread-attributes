//Example 1: Nối arr
let cars1=['AUDI', 'BMW', 'TATA','MERSCEDES'];
let cars2=[];
let cars3=['NISSAN','TOYOTA'];


cars2=[...cars1]
console.log(cars2)
cars3=[...cars3,...cars2]
console.log(cars3)

//Exxample 2: Nối obj
const cars4={
    name4: 'Mercedes',
    color4:'Black',
}

const cars5={
    name5: 'Nissan',
    color5: 'Blue'
}
let cars6={...cars4,...cars5}
console.log(cars6);

//Example 3: Lấy phần tử trong mảng.\

let words ='Hello';
let newwords=[...words];
console.log(newwords);

//Example 4: Lấy các phần tử trong mảng.

let arr=[2,5,1,7,3,6,9,23,22,11];

let [a,b,c,...rest]=arr;

console.log(a);
console.log(b);
console.log(c);
console.log(rest);

