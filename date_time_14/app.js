let val;

const today = new Date();


val = today;
console.log(val);

console.log(typeof val);

val.toString();

let brthday = new Date('9-10-1990 11:21:00');

console.log(brthday);

brthday = new Date('September 10 1991');


console.log(brthday);

brthday = new Date('9/10/1992');


console.log(brthday);


brthday = new Date('90/10/1992');

console.log(brthday);

console.log(today.getDate());
//Month is zero based, so jan will be 0
console.log(today.getMonth());
console.log(today.getFullYear());

console.log(today.getHours());

console.log(today.getMinutes());

console.log(today.getMilliseconds());

console.log(today.getTime());


brthday.setDate(3);

brthday.setMonth(3);
console.log(brthday);

const ID = '100';


if(typeof ID !== 'undefined') {
    console.log(`The id is ${ID}`);
} else {
    console.log('No ID');
}


console.log(ID === '100' ? 'CORRECT' : 'INCORRECT');


if(ID === '100')
    console.log('CORRECT2');
else 
    console.log('dddddd');