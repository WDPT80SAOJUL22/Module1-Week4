// Array.sort()
// tabela ASCII

const numbers = [22, 25, 28, 44, 3, 12, 68, 123, 1048, 5]
const numbers2 = [9, 7, 5, 4, 8, 1, 0]

console.log(numbers2); // antes do sort
console.log(numbers2.sort()) // retorno do sort
console.log(numbers2); // após o sort


// como funciona

function compare (a, b) {
    if (a < b) return -1 // não altera a posição
    if (a > b) return 1 // inverte a posição
    if (a === b) return 0 // não altera a posição
}


numbers.sort((a, b) => a - b) // ordem crescente
console.log(numbers)

numbers.sort((a, b) => b - a) // ordem decrescente
console.log(numbers)

// com strings

const words = ['Hello', 'Goodbye', 'AA', 'First', 'A', 'a', 'Second', 'b', 'Third'];

words.sort((a, b)=> a.localeCompare(b))
console.log(words)

const people = [
    { name: 'Candice', age: 25 },
    { name: 'Tammy', age: 30 },
    { name: 'Allen', age: 49 },
    { name: 'Nettie', age: 21 },
    { name: 'Stuart', age: 25 },
    { name: 'Stuart', age: 32 },
    { name: 'Stuart', age: 17 }
]


people.sort((a, b) => {
   const sortByName =  a.name.localeCompare(b.name)
   if(sortByName === 0){
    return a.age - b.age
   }
   return sortByName
})

console.log(people);

people.reverse()

console.log(people);