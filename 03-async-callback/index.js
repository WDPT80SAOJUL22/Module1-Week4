// 

const getFirstElement = (array) => {
    return array[0]
}
const array = ['Madrid', 'Barcelona', 'Miami']
getFirstElement(array)

// exemplo hipotetico

// const readFile = (file) => {
//     // fazer qualquer coisa
//     return contentFile.lenght
// }

// const textSize = readFile(file)
// console.log(textSize) <------ undefined

// Callback Functions

// const asyncFunc = (callback) => {
//      execução qq
//     callback()
// }

// setTimeout() // setInterval()

// setTimeout sintax

// const timeOutId = setTimeout(callbackFunction, delay)

//cancelar o timeout

// clearTimeout(timeOutId)

const counterId = setTimeout(() => {
    console.log('timeout')
}, 2000) 

clearTimeout(counterId)

let counter = 0

// const counterFunc = () => {
//     console.log(counter)
//     counter += 1
//     const timeOutId = setTimeout(counterFunc, 1000)
//     if (counter > 10) {
//         clearTimeout(timeOutId)
//     }
// }

// counterFunc()


// setInterval

const intervalId = setInterval(() => {
    console.log(counter)
    counter += 1
    if (counter > 10){
        clearInterval(intervalId)
    }
}, 1000)

console.log('Eu não espero')

// async/ await // Promises // .then() .catch()