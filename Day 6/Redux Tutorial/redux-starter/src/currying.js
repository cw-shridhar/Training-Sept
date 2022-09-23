function add(a){
    return function(b){
        return a+b;
    }
}

const add2 = a => b => a+b;

console.log(add(1)(5)); // currying