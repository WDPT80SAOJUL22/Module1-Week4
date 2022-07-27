// array.map()

const arr = [1, 2, 3]

// const newArr = arr.forEach((element) => { return element * 2})

// console.log(newArr)

const newArr = arr.map(element => element * 2)

console.log(newArr)

// array.reduce()

const numbers = [2, 3, 4, 5, 6]

let count = 0

for (let number of numbers) {
    count += number
}

const total = numbers.reduce((acc, element) => {
    console.log(acc)
    return acc + element
})

console.log(total);

const people = [
    { name: 'Candice', age: 25 },
    { name: 'Tammy', age: 30 },
    { name: 'Allen', age: 49 },
    { name: 'Nettie', age: 21 },
    { name: 'Stuart', age: 17 }
]

const ages = people.reduce((sum, person) => sum + person.age, 0)

console.log('ages ----->', ages);


const strings = ['essa', 'e', 'uma', 'string', 'bem', 'grande']

const result = strings.reduce((acc, value) => {
    return `${acc}-${value}`
})

const rewards = [
    {type: 'run'},
    {type: 'run'},
    {type: 'run'},
    {type: 'run'},
    {type: 'math'},
    {type: 'math'},
    {type: 'math'},
    {type: 'math'},
    {type: 'math'},
    {type: 'cook'},
    {type: 'cook'},
    {type: 'cook'},
    {type: 'cook'},
    {type: 'cook'},
    {type: 'cook'}
]

const resume = rewards.reduce((acc, reward) => {
    acc[reward.type] += 1
    return acc
}, 
    { run: 0, math: 0, cook: 0 }
)

console.log('resume--->', resume)

console.log(result);

// array.filter()

const numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const evenNumbers = numbersArr.filter((number) => { return number % 2 === 0})

console.log(evenNumbers);

// const people = [
//     { name: 'Candice', age: 25 },
//     { name: 'Tammy', age: 30 },
//     { name: 'Allen', age: 49 },
//     { name: 'Nettie', age: 21 },
//     { name: 'Stuart', age: 17 }
// ]

const lessThan18 = people.filter(person => person.age < 18)

console.log(lessThan18);

const namesStartedWithC = people.filter(person => {
    if (person.name[0] === 'C' && person.age >= 21) {
        return true
    }
    else {
        return false
    }
})

console.log(namesStartedWithC);


const places = [
    {
      title: "Awesome Suite 20' away from la Rambla",
      price: 200,
      type: 'Private Room',
      pool: true,
      garage: false
    },
    {
      title: 'Private apartment',
      price: 190,
      type: 'Entire Place',
      pool: true,
      garage: true
    },
    {
      title: 'Apartment with awesome views',
      price: 400,
      type: 'Entire Place',
      pool: false,
      garage: false
    },
    {
      title: 'Apartment in la Rambla',
      price: 150,
      type: 'Private Room',
      pool: false,
      garage: true
    },
    {
      title: 'Comfortable place in Barcelona´s center',
      price: 390,
      type: 'Entire place',
      pool: true,
      garage: true
    },
    {
      title: 'Room near Sagrada Familia',
      price: 170,
      type: 'Private Room',
      pool: false,
      garage: false
    },
    {
      title: 'Great house next to Camp Nou',
      price: 140,
      type: 'Entire place',
      pool: true,
      garage: true
    },
    {
      title: 'New apartment with 2 beds',
      price: 2000,
      type: 'Entire place',
      pool: false,
      garage: true
    },
    {
      title: 'Awesome Suite',
      price: 230,
      type: 'Private Room',
      pool: false,
      garage: false
    },
    {
      title: "Apartment 10' from la Rambla",
      price: 930,
      type: 'Entire place',
      pool: true,
      garage: true
    }
  ];

//  {
//     title: "Awesome Suite 20' away from la Rambla",
//     price: 200,
//     type: 'Private Room',
//     pool: true,
//     garage: false
//   }

const filteredPlaces = places.filter(place => place.pool === true && place.price < 1800)

// console.log(filteredPlaces);