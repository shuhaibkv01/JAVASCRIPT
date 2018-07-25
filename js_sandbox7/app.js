console.log('Data Types ');

/*
Primitive Types
------------------
1 - String
2 - Number
3 - Boolean
4 - Null
5 - Undefined
6 - Symboles(ES6)



*/


/*

Reference Type

1 - Arrays
2 - Objects literals
3 - Fucntions
4 - Dates
5 - Anything else



*/


var fnPrimitives = () => {
    document.getElementById('primitives').hidden = false;
    document.getElementById('reference').hidden = true;
};

var fnReference = () => {
    document.getElementById('reference').hidden = false;
    document.getElementById('primitives').hidden = true;
};


const name = 'sh';

console.log(typeof name);

const num = 12;

console.log(typeof num);

const bool = false;

console.log(bool);

const car = null;

console.log(typeof car);

var und;

console.log(und);

const sym = Symbol();

console.log(sym);

const arr = ['1',"ds", "fs"];

console.log(typeof arr);


const ob = {
    name : "shuhaib",
    age : 20
};

console.log(typeof ob);


const date = new Date();

console.log(date);

console.log(typeof date);

//----------------------------- Type Conversions 

let val;

val = String(122);

console.log(val);
console.log(typeof val);
console.log(val.length);


val = String(true);

console.log(val);
console.log(typeof val);
console.log(val.length);


val = String(new Date());

console.log(val);
console.log(typeof val);
console.log(val.length);


val = String([1,3,4]);

console.log(val);
console.log(typeof val);
console.log(val.length);



//toString()

val = (5).toString();

val = (false).toString();



val = Number('4');


console.log(val);
console.log(typeof val);
console.log(val.toFixed());


val = Number(false);


console.log(val);
console.log(typeof val);
console.log(val.toFixed());

val = Number(null);


console.log(val);
console.log(typeof val);
console.log(val.toFixed());


val = Number('hello');


console.log(val);
console.log(typeof val);
console.log(val.toFixed());


val = Number([33,34]);


console.log(val);
console.log(typeof val);
console.log(val.toFixed());


val = parseInt('12.3');


console.log(val);
console.log(typeof val);
console.log(val.toFixed());



val = parseFloat('12.3');


console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

const val1 = String(3);

const val2  = 4;

const val3 = val1 + val2;

console.log(val3);

