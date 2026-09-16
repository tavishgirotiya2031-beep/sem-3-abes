// const EventEmitter = require('events'); 
// const myEmitter = new EventEmitter();

// myEmitter.on('greet', (name) => {
//     console.log(`Hello, ${name}! Welcome.`);
// });

// myEmitter.on('farewell', (name) => {
//     console.log(`Goodbye, ${name}! See you soon.`);
// });

// myEmitter.emit('greet', 'Aman');
// myEmitter.emit('farewell', 'Aman');
const {EventEmitter} = require{'events'};
class Button extends EventEmitter {}
const button = new Button();
button.on('click',()=>console.log('button clicked'));
button.on('mouseover',()=>console.log('mouse is over the button'));
button.emit('click');
button.emit('mouseover');