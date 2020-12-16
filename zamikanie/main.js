function createCalcFunction (n) {
    return function () {
        console.log(1000 * n)
    }
}

const calc = createCalcFunction(42)
calc()

// example 2

function createIncrementor (n) {
    return function (num) {
        return num + n
    }
}

const addOne = createIncrementor(11)
console.log(addOne(12))

// example 3 url

function urlGeneretor (domain) {
    return function (url) {
        return `https://${domain}.${url}`
    }
}
const comUrl = urlGeneretor('google')
const ruUrl = urlGeneretor('yandex')
console.log(comUrl('com'))
console.log(ruUrl('ru'))

// example 4
function bind (context, fn) {
    return function (...args) {
        fn.apply(context, args)
    }
  }
 
function logPerson () {
    console.log(`Person ${this.name} ${this.age}, ${this.job}`)
}

const person1 = {name: 'Alex', age: 35, job: 'Front End'}
const person2 = {name: 'Mary', age: 24, job: 'SMM'}

bind(person1, logPerson)()
bind(person2, logPerson)()


