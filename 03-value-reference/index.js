// Primitivos vs objetos

let price = 20.99
let price2 = 20.99
let priceCopy = price
console.log(price === price2);

// não primitivos - referencia

let book1 = {
    title: 'Harry Potter'
}

let book2 = {
    title: 'Senhor dos aneis'
}

console.log(book1 === book2); // false
console.log(book1.title === book2.title); // true

let book3 = book1
book2 = book1
console.log('------->', book1 === book2); // true

console.log(book1 === book3);
book1.author = 'J.K. Rowling'

console.log(book3);


const students = ['Anneliese', 'Lena', 'Marcelo', 'Amanda']
// const ironhackers = ['Anneliese', 'Lena', 'Marcelo', 'Amanda']
const ironhackers = students

console.log(ironhackers === students);


// copiar um objeto

//copia rasa 
//  const copyBook1 = new Object(book1)
 const copyBook1 = Object.assign({}, book1)
 console.log(book1);
 console.log(copyBook1);
 console.log(copyBook1 === book1);

 // exmplo copia rasa

 const book5 = {
    title: 'O estranho mundo de Robert',
    publishers: [
        {companyName:'A'}, {companyName:'B'}
    ]
 } 

//  let publishers = book5.publishers

 const copyBook5 = Object.assign({}, book5)

 console.log(book5 === copyBook5);
 console.log(book5.publishers === copyBook5.publishers);


 // JSON - Java Script Object Notation

//  {
//     "prop1": "valor1",
//     "prop2": [
//         1,
//         true
//     ]
//  }

// deep copy

const copyJsonString = JSON.stringify(book5)
console.log(copyJsonString)
const copyJsonObject = JSON.parse(copyJsonString)
console.log(copyJsonObject)

console.log(book5.publishers === copyJsonObject.publishers);

// recursive function to copy

const cloneObject = (obj) => {
    let clone = {}
    for (let prop in obj) {
        if(typeof obj[prop] === "object") {
            clone[prop] = cloneObject(obj[prop]) // recursiva
        } else {
            clone[prop] = obj[prop]
        }
    }
    return clone
}



// shallow Copy Spread Operator:

const spreadCopy = {...book5}
console.log(spreadCopy === book5);
console.log(spreadCopy.publishers === book5.publishers);

// Arrays

// shallow Copy:

const copyArrMap = students.map((element) => element);

const arraySpread = [...students]

// deep Copy
const copyArr = JSON.parse(JSON.stringify(students));

// spread Operator

// Adicionar elementos em um array

const students2 = ['Iury', 'Roxanie', 'Stefano', 'Swami']

const allStudents = [...students, ...students2]

console.log(allStudents);

//Metodos de array inplace
// splice()
// pop()
// shift()
// .sort()

// const newArr = [...arr].sort() <- não altera o array original





