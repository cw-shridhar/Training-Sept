import {compose, pipe} from '../node_modules/lodash/fp';

const input = "     javascript  "
const output = "<div>" + input.trim() + "<div/>"

const trim = str=>str.trim();
// const wrapInDiv = str => `<div>${str}</div>`;
// const wrapInSpan = str => `<span>${str}</span>`;
const wrap = type => str => `<${type}>${str}</${type}>`
const toLowerCase = str => str.toLowerCase();

// before
// const result = wrapInDiv(toLowerCase(trim(input)))
// console.log(result);

// after lodash
const transformUsingPipe = pipe(trim, toLowerCase, wrap("span"));
// pipe function builds the pipleline, op of first is ip of second function
console.log(transformUsingPipe(input));


// functions are like first class citizens in javascript. we can treat them like a objects

// a higher order function is a function which takes function as an arguement or return it.


/*
// function sayHello(){
//     return "hello world!";
// }

function greet(fnMessage){
    console.log(fnMessage());
}

function sayHello(){
    return function(){
        return "hello world"
    }
}
let fn = sayHello();
let message = fn();
console.log(message);




// let fn = sayHello;
// console.log(fn());

// greet(sayHello)

*/