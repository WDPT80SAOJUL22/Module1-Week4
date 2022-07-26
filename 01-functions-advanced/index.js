// Functions

// Declarative functions

function calcSum (num1, num2) {
    return num1 + num2
}

console.log(calcSum(1,2))

// expression functions

const sayWelcome = (name) => { // arrow function
    console.log(`Welcome, ${name}`)
}

const sayWelcome2 = function (name) { // function
    console.log(`Welcome, ${name}`)
}

sayWelcome('Juliana')
sayWelcome2('Roberta')

// Hoisting - Içamento

funcaoDeclarada()

function funcaoDeclarada(){
    console.log('sou uma função declarada');
}

// funcaoExpressao()

const funcaoExpressao = function () {
    console.log('Sou uma função como expressao');
}

funcaoExpressao()

// funções declaradas sobre de hoisting e podem ser executadas antes da declaração isso não vale para funções de expressão


// Callback

function eatDinner(callback) {
    setTimeout(function () {
        console.log('Eating Dinner!!');
        callback()
    }, 2000)
}
function eatDessert() {
    console.log('Eating Dessert!!');
}

// eatDinner()
// eatDessert()

// eatDinner(eatDessert)

// eatDinner(() => {console.log('Cleaning the dishes')})

// setTimeout(() => {console.log('oi depois de 1 segundo')}, 1000)


// arrow function

// const nameFunction = () => {}

const sayMyName = name => `Your name is ${name}` // se tiver somente 1 argumento não precisamos colocar parenteses

// Se o retorno for direto na mesma linha sem outras linhas de comando não precisamos do return e nem das chaves


console.log(sayMyName('Heisenberg'))


//  arrow functions sofrem bind -- são ligadas ao escopo anterior 

const user = {
    name: 'Gabriel',
    age: 31,
    getOlder: function () {
        setInterval(() => {
            // console.log(this)
            this.age +=1
            console.log(this.age);
        },1000)
    }
}

// user.getOlder()

const printSomething = function () {
    console.log(arguments)
    console.log(arguments.length)
    // for (let i = 0 ; i < arguments.length; i += 1){
    //     console.log(arguments[i]);
    // }
    const args = Array.from(arguments)
    console.log(args.join(' '))
    args.forEach(arg => console.log(arg))
}

printSomething('hi','nome', 4)

// console.log(Math.max(1,2,3,4,5,6,7,8,100))