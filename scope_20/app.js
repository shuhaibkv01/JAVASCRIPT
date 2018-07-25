//Global Scope 

var a = 1;
let b = 2;
const c = 3;



// var f = function () {
//     var a = 4;
//     let b = 5;
//     const c = 6;

//     console.log('Method Scope a : ' + a);
//     console.log('Method Scope b : ' + b);
//     console.log('Method Scope c : ' + c);
// }

// f();
//Result : 
// app.js:14 Method Scope a : 4
// app.js:15 Method Scope b : 5
// app.js:16 Method Scope c : 6
// app.js:21 Global Scope a : 1
// app.js:22 Global Scope b : 2
// app.js:23 Global Scope c : 3


// if (true) {
//     var a = 4;
//     let b = 5;
//     const c = 6;

//     console.log('Block Scope a : ' + a);
//     console.log('Block Scope b : ' + b);
//     console.log('Block Scope c : ' + c);

// }

// Block Scope a : 4
// app.js:35 Block Scope b : 5
// app.js:36 Block Scope c : 6
// app.js:40 Global Scope a : 4
// app.js:41 Global Scope b : 2
// app.js:42 Global Scope c : 3


for(var a = 1;a<10;a++) {
    console.log(`Index ${a}`);
}

// Index 1
// app.js:49 Index 2
// app.js:49 Index 3
// app.js:49 Index 4
// app.js:49 Index 5
// app.js:49 Index 6
// app.js:49 Index 7
// app.js:49 Index 8
// app.js:49 Index 9
// app.js:52 Global Scope a : 10
// app.js:53 Global Scope b : 2
// app.js:54 Global Scope c : 3

console.log('Global Scope a : ' + a);
console.log('Global Scope b : ' + b);
console.log('Global Scope c : ' + c);

