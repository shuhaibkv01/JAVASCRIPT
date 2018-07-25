//Functions


//Function declarations 
function fullName(firstName = 'Default', lastName = 'Default') {
    return firstName + " " + lastName;

};



//Function expressions
const fullName2 = function(firstName = 'Default', lastName = 'Default') {
    return firstName + " " + lastName;

};



console.log('Hello');
console.log(fullName('Shezin', 'Kv'));

console.log(fullName());


console.log(fullName('ddd'));

console.log(fullName2(12,22));


//Imediatly invokable function expressions - IFFS 

(function() {
    console.log('Ifff')
})();


//Object methods 

const todo = {
    add : function() {
        console.log('added');
    },

    updtae : () =>{
        console.log('Updated');
    }
};

todo.add();

todo.updtae();

(todo.delete = function() {
    console.log('Deleted');
})();

//foreach loop

const cars = ['Ford','Honda','Tyota'];

cars.forEach((
    element, index, arr) => {
    console.log(`${index} : ${element}`);
});


//map

const users = [
    {id: "1", name : "Shuhaib"},
    {id : "2", name : "Shezin"}
];

const ids = users.map(function(user) {
    return user.id;
});

console.log(ids);




//For in loop
const user = {
    firstName : "Shuhaib",
    lastName : "KV",
    age : 27
};


for(let x in user) {
    console.log(` ${x} :  ${user[x]}`);
}