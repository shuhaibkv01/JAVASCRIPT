// //Create Element

// const li = document.createElement('li');

// //Add class to li

// li.className = 'collection-item';

// //li.title = 'hello';

// //Set attribute title

// li.setAttribute('title', 'Hello 2');

// const text = document.createTextNode('Hello World');

// li.appendChild(text);

// document.querySelector('ul.collection').appendChild(li);

// const link = document.createElement('a');

// link.className = 'delete-item secondary-content';

// link.innerHTML = `<i class="fa fa-remove"></i>`;

// li.appendChild(link);

// console.log(li);

//REplace element

// const newHeading = document.createElement('h2');

// newHeading.id = 'task-title';

// newHeading.appendChild(document.createTextNode('Task List'));

// //get old heading
// const oldHeading = document.getElementById('task-title');

// const cardAction = document.querySelector('.card-action');

// //replace

// cardAction.replaceChild(newHeading,oldHeading);

// //Remove Elemenet

// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');
// //removes the 0th element
// lis[0].remove();
// lis[1].remove();

// //removes the 2nd child element
// list.removeChild(lis[2]);

// const firstLi = document.querySelector('li:first-child');

// const link = firstLi.children[0];

// let val;

// //Classes
// //it will give all the class details
// val = link.className;


// //it will give list of classes associated with it
// val = link.classList;

// val = link.classList[0];

// link.classList.add('test');



// link.classList.remove('test');

// val = link.className;


// //Attributes 

// val = link.getAttribute('href');

// val = link.hasAttribute('href');

// link.setAttribute('title','Google');

// link.removeAttribute('title');

// link.setAttribute('href','http://google.com');
// console.log(val);


//Event Listener

// document.querySelector('.clear-tasks').addEventListener('click',
// (e) => {
//     let conformation = confirm('Are you sure');
//     if(conformation) {
//         //document.querySelector('ul').removeChild(document.querySelectorAll('li')[0]);
//         document.querySelector('ul').remove();
//     }
//     //it will prevent the default href action
//     e.preventDefault();

//     val = e.target;

//     val = e.type;

//     //Cord events related to the window

//     val = e.clientX;
//     val = e.clientY;

//     // Co -ord related to the elements

//     val = e.offsetY;
//     val = e.offsetX;

//     console.log(val);
// }
// );


// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');

// const heading = document.querySelector('h5');

// let eventHandler = (e) => {
//     console.log(`EVENT TYPE : ${e.type}`);
//     heading.textContent = `MouseX : ${e.offsetX}  MouseY : ${e.offsetY}`;

//     document.body.style.background = `rgb(${e.offsetX},${e.offsetY},40)`;
// };

//clearBtn.addEventListener('click',eventHandler);

//clearBtn.addEventListener('dblclick',eventHandler);

// clearBtn.addEventListener('mousedown',eventHandler);

// clearBtn.addEventListener('mouseup',eventHandler);

// card.addEventListener('mouseenter',eventHandler);

// card.addEventListener('mouseleave',eventHandler);




// card.addEventListener('mouseover',eventHandler);

// card.addEventListener('mouseout',eventHandler);

// card.addEventListener('mousemove',eventHandler);

const form = document.querySelector('form');

const taskInput = document.getElementById('task');

const heading = document.querySelector('h5');

taskInput.value = '';

//Add Submit event listener

let runEvent = (e) => {
    console.log(`EVENT TYPE : ${e.type}`);

    console.log(e.target.value);

    heading.textContent = e.target.value;

   // e.preventDefault();
}

//form.addEventListener('submit', runEvent);

//taskInput.addEventListener('keydown',runEvent);

//taskInput.addEventListener('keyup',runEvent);

//taskInput.addEventListener('keypress',runEvent);

//when we click inside input box
//taskInput.addEventListener('focus',runEvent);


//taskInput.addEventListener('blur',runEvent);


// taskInput.addEventListener('cut',runEvent);

// taskInput.addEventListener('paste',runEvent);

//taskInput.addEventListener('copy',runEvent);


//taskInput.addEventListener('input',runEvent);

const select = document.querySelector('select');

select.addEventListener('change',runEvent);