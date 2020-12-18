//forEach 

const people = ['Ivan', 'Mary', 'Elena', 'Andrey']
people.forEach((item, index, array) => console.log(`item = ${item};  index = ${index}; array = ${array}`))

// examle 2

let numbers = [8, 4, 9, 7]
//let res = []

numbers.forEach((numb, ind, res) => res.push(numb * ind))
console.log(numbers)

//example 2

let numbers1 = [8, 4, 9, 7]
numbers1.forEach((iter, index, arr) => arr[index] = iter * 2)
console.log(numbers1)

//example 3 

let numbers2  = [8, 4, 9, 7] , res1 = []
numbers2.forEach((iter, index, arr) => res1.push(iter * 2))
console.log(`Numbers 2 = ${numbers2}`)
console.log(`res1 = ${res1}`)

// Контекст вызова
let intervals = [ [ 1, 8 ], [ 2, 3 ], [ 4, 7 ], [ 5, 6 ] ]

intervals.forEach (
    function ( interval ) { console.log ( this ) },
    intervals
)

// Map ()

let first = [8, 4, 9, 7]

let result = first.map(iter => iter * 2)
console.log(`result = ${result}`)

//example 1

// filter() 
let sourceArray = [
    {name: 'Николай Василенко', country: 'Украина'},
    {name: 'Alex Tomson' , country: 'Usa'},
    {name: 'Семен Кратко', country: 'Украина'},
    {name: 'Robert Tabasko', country: 'Usa'}
]
let usa = sourceArray.filter(iter => iter.country === 'Usa')
console.log(usa)

//find()

let cards = [
    {num: '457819245', cash : 1100},
    {num: '457311032', cash : 421},
    {num: '451455329', cash : 14456},
    {num: '450029337', cash : 1976}
]

console.log(cards.find(card => card.cash > 4000))

//Vladilen
//forEach

const peopleCard = [
    {name: 'Екатерина', age: 25, budget: 40000},
    {name: 'Владислав', age: 30, budget: 2346},
    {name: 'Павел', age: 12, budget: 120},
    {name: 'Дмитрий', age: 45, budget: 36999}
]
  
peopleCard.forEach(iter => console.log(iter.name))
peopleCard.forEach(iter => console.log(iter.age))
peopleCard.forEach(iter => console.log(iter.budget * 2))
const resPeopleCard = []
peopleCard.map(iter => resPeopleCard.push(iter.budget))

const newPeople = peopleCard.map(iter => {return iter})
console.log(newPeople)

//filter
let userAge = peopleCard.filter(item => item.age > 18)
console.log(userAge)

//reduce

const amount = peopleCard.reduce((total, person) => total + person.budget, 0)
console.log(amount)

//find
const peopleFind = peopleCard.find(iter => iter.name === 'Павел')
console.log(peopleFind) 
