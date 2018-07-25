




// let val;

// val = document;
// val = document.all;
// val = document.all[2];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList[0];

// val = document.images;

// val = document.scripts;
// val = document.scripts[2].getAttribute('src');

// let scripts = document.scripts;

// let scriptsArr = Array.from(scripts);

// scriptsArr.forEach(function(script) {
//   console.log(script.getAttribute('src'));
// });

// console.log(val);


// ----------------


// var val;

// val = document;
// //to get the entire document
// val = document.all;



// val = document.all[1]; // get head tag


// val = document.all.length;

// val = document.head;

// val = document.body;

// val = document.doctype;

// val = document.domain;

// val = document.characterSet;

// val = document.contentType;

// val = document.URL;

// val = document.forms;

// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].action;

// val = document.forms[0].method;

// val = document.links;

// val = document.links[0].className;

// val = document.links[0].id;

// val = document.links[0].classList[0];

// val = document.images;


// val = document.scripts;

// val = document.scripts[2].getAttribute('src');

// var scripts = document.scripts;

// let scriptArr = Array.from(scripts);

// scriptArr.forEach(element => {
//   console.log(element.getAttribute('src'));
// });
// console.log(val);


//document.getElementById()

// console.log(document.getElementById('task-title'));

// var element = document.getElementById('task-title');

// element.style.color = 'green';

// console.log(element.id);

// element.style.background = 'grey';

// element.style.padding = '5px';

// //element.style.display = 'none';

// element.textContent = 'Task List';

// element.innerText = 'My Task';

// element.innerHTML = `<span style='color:red'>My<span>`;


//Quey Selector

// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-action'));

// console.log(document.querySelector('h5'));

// //this will give color to first li
// document.querySelector('li').style.color = 'red';
// document.querySelector('ul li').style.color = 'blue';

// //it will color the last li element
// document.querySelector('li:last-child').style.color = 'green';

// //it will select the nth child
// document.querySelector('li:nth-child(3)').style.color = 'yellow';

// document.querySelector('li:nth-child(4)').textContent = 'New Item';

// //it will select first odd number
// document.querySelector('li:nth-child(odd)').style.background = '#ccc';


// document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';


//document.getElemetsByClassName()

// const items = document.getElementsByClassName('collection-item');

// console.log(items);

// console.log('First collection items id : ' + items[0].id);


// items[0].style.color = 'red';
// items[3].style.color = 'green';


// const listItems  = document.querySelector('li').getElementsByClassName('collection-item');


// console.log(listItems);


//document.getElemetByTagName()

// html collection is not an array , we cannot do any array operation

// const lis = document.getElementsByTagName('li');
// //wont work
// //lis.reverse();

// //convert html collection into array
// var lisArr = Array.from(lis);

// lisArr.reverse();

// lisArr.forEach((li,index)=> {
// li.style.color = 'red';

// li.textContent = `${index} Hello`;
// });

// console.log(lisArr);

// console.log(lis);

// console.log(lis[0]);

// lis[0].style.color = 'red';



//document.querySelectorAll()
//color all odd lis
// document.querySelectorAll('li:nth-child(odd)').forEach(
//  (liOdd) => {
//   liOdd.style.background = '#ccc';
//   }
// );

// document.querySelectorAll('li:nth-child(even)').forEach(
//   (liEven) => {
//     liEven.style.background = '#f4f4f4';
//   }
// );


// let val;

// const list = document.querySelector('ul.collection');
// const listItems = document.querySelector('li.collection-item:first-child');




// val = list;

// val = listItems;

// //Get Child node, it will return a node list, it will have text also
// val = list.childNodes;

// val = list.childNodes[0].nodeName;
// val = list.childNodes[0].nodeType;

// 1 - Elements 
//2 - Attributes
//3 - Text Node
//8 - Comments
//9 -Document itself
// 10 - Doctype

//will return html collection
//val = list.children;

// val = list.children[0].textContent = 'Hello';

// val = list.children[3].children;

// // it will return text child
// val = list.firstChild;

// val = list.firstElementChild;

// val = list.lastChild;

// val = list.lastElementChild;

// //count child element
// val = list.childElementCount;

// val = listItems.parentNode;

// val = listItems.parentElement;

// val = list.parentElement.parentElement;

// val = listItems.nextSibling;

// val = listItems.nextElementSibling;

// val = listItems.nextElementSibling.nextElementSibling;

// val = listItems.previousSibling;

// val = listItems.previousElementSibling; // null

// val = listItems.nextElementSibling.previousElementSibling;

// console.log(val);