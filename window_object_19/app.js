// //WINDOW METHODS OBJECTS AND PROPERTIES
// //alert('Hello');
// //Window object

// //Window is a global object in client side java script

// window.console.log('Hello');

// //window.alert('d');
// //Prompt
// //const input = window.prompt();

// //alert(input);


// //confirm

// if (confirm('Are you sure, you want to delete it?')) {
//     console.log('Deleted successfully');
// } else {
//     console.log('Not Deleted');
// }



let val;

// Outser hight and width

val = window.outerHeight;
val = window.outerWidth;

//val = window.scrollY
val = window.scrollX


val = window.location;

val = window.location.hostname;
//val = window.location.reload();
val = window.location.port;
val = window.location.href;

//it will get the query string
val = window.location.search;

//Redirect
//val = window.location.href = 'http://google.com';

//History Object

//window.history.go(-2);

val = window.history.length;

val = window.navigator;

val = window.navigator.appName;

val = window.navigator.userAgent;

val = window.navigator.vendor;

val = window.navigator.language;

console.log(val);