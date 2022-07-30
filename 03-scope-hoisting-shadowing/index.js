// 3 Escopos

// 1- escopo global
// 2 - escopo de função
// 3 - escopo de bloco ---> {}

const msg = 'Estou no Escopo global' //acessivel globalmente

const sayHelloFromLocalScope = () => {
    const greetings = 'Estou no escopo local' // só é acessivel dentro do escopo
    // console.log(msg);
    return greetings;
}

// console.log(msg);
// console.log(greetings); <-- não acessivel fora do escopo

// var 
var messageVar = 'olá sou um var';
var messageVar = 'olá sou um var2';
messageVar = 'olá sou um var3';

// por que é ruim?

var nameVar = 'joão'

if(true) {
    var nameVar = 'João'
    console.log('dentro do if', nameVar);
}

console.log('Fora do If', nameVar);

for(var i = 0; i < 5; i += 1){
    console.log(i);
}
console.log('após o for', i);

// var sofre de hoisting

console.log(variavelHoisting);
var variavelHoisting = 2
console.log(variavelHoisting);


// var variavelHoisting
// console.log(variavelHoisting);
// variavelHoisting = 2
// console.log(variavelHoisting);

// Shadowing

let a = 2;
let b =4;
console.log('antes da função', a);
console.log('antes da função- b -', b);

const innerShadowing = () => {
    let a = 4;
    if(true) {
        let a = 8
        console.log('dentro da função e do if', a);
    }
    b = 6;
    console.log('dentro da função', a);
    console.log('dentro da função- b -', b);
}
innerShadowing();

console.log('após a função', a);
console.log('após a função - b-', b);