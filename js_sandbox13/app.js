//Object Litterals

const person = {
    firstName : "Shuhaib",
    lastName  : "KV",
    age : 27,
    email : "shuhaibkv01@gmail.com",
    hobies : ['Cricket', 'Chess'],
    address : {
        city : "Kannur",
        pincode : 670302
    },
    brthYear : function() {
        return 2018 - this.age;
    }
};


const people = [
    {firstName : "Shuhaib", age : 28},
    {firstName : 'An', age :30}

];


for(let i = 0 ;i< people.length; i++) {
    console.log('-----------------');
    console.log('Name : ' + people[i].firstName);
    console.log('Age  : ' + people[i].age);
}

console.log(person.firstName);
console.log(person['firstName']);
console.log(person.hobies[0]);
console.log(person.address.city);
console.log(person.brthYear());
