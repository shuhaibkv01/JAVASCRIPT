const name = 'Shuhaib';
const age = 27;

const job = 'SE';

const city = 'Bangalore';
var html;

html = '<ul><li>Name : ' + name + '</li><li>Age : ' + age + '</li><li> Job : ' + job + '</li><li>City : ' + city;


html = '<ul>' + 
            '<li>Name : ' +name + '</li>' + 
            '<li>Age : ' +age + '</li>' + 
            '<li>Job : ' + job + '</li>' + 
            '<li>City : ' + city + '</li>' +
        '</ul>';

function fn() {
    return 'Hello';
};

html = `

    <ul>
        <li> Name :  ${name} </li>
        <li> Age  :  ${age} </li>
        <li> Job1  : ${job} </li>
        <li> City : ${city} </li>
        <li> ${2 +3} </li>
        <li> ${fn()} </li>
        <li> ${age >30 ? 'Age is over': 'Age is less'} </li>
    </ul>

`;



document.body.innerHTML = html;