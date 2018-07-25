//Create Arrays

const numbers = [46,58,69,23, 100, 88, 99];

const numbers2 = new Array(2,3,5,34);

const fruites = ['apple', 'babana', 'orange'];

const mixed = ['st', 3, false, null, undefined, {a:"3",b:"4"}, new Date];


console.log(mixed);

console.log( mixed.length);

console.log(Array.isArray(mixed));
console.log(typeof mixed);

console.log(mixed[2]);

mixed[2] = 'rr';
console.log(mixed[2]);

console.log(mixed.indexOf('st'));
//Add on to to end
numbers.push(25);

console.log(numbers);

//add in the first
numbers.unshift(120);

console.log(numbers);

numbers.pop();

console.log(numbers);

numbers.shift();

console.log(numbers);
numbers.splice(1,1);
console.log(numbers);

numbers.reverse();

console.log(numbers);

numbers.sort();

console.log(numbers);

numbers.sort( (x,y) => {
    return x-y;
});

console.log(numbers);


function isLessThan50(number) {
    return number <50;
}

//it will find the first number whch is less that 50
console.log(numbers.find(isLessThan50));






