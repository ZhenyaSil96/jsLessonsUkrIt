var obj = {
    name: 'google',
    say: function () {
        console.log(this.name)
    }
}
obj.say() //google

//Example1 

window.name = 'window'
function say1 () {
    console.log(this.name)
}

var obj1 = {
    name: 'Name',
    say1: say1
}
say1() //Window
obj1.say1()  //Name

// Example 2

function getName () {
    console.log(this.name)
}

getName.getName = getName
getName.getName() //getName

//Call
window.name = 'window'
function func() {
    console.log(this.name)
}
var figure = {
    name: 'figure'
}
var sample = {
    name: 'sample'
}
func()
func.call(figure)
func.call(sample)
//Example 2 

function func1 () {
    console.log(this.name)
}

var figure1 = {
    name: 'Krug'
}

var sample1 = {
    name: 'Sample1'
}
func1.call(figure1, 9 , false, 'Hello')
func1.call(sample1, true, 22)

//apply

function car () {
    console.log(this.name, arguments)
}

var cpp = {
    name: 'cpp'
}

var color = {
    name: 'color'
}

car.apply(cpp, [22, 'Motor'])
car.apply(color, [34, 'Podveska'])

//Vladilen

function hello () {
    console.log('Hello', this)
}

const person = {
    name: 'Vlad',
    age: 25,
    sayHello: hello,
    sayHelloWindow: hello.bind(this),
    logInfo: function (job, phone) {
        console.group(`${this.name} : info`)
        console.log('Name', this.name)
        console.log('Age', this.age)
        console.log(`Job : ${job}`)
        console.log(`Phone : ${phone}`)
        console.groupEnd()
    }
}

const lena = {
    name: 'Elena',
    age: 24
}

const tema = {
    name: 'Artem',
    age: 14
}

person.logInfo.bind(tema)()

const infoElena = person.logInfo.bind(lena)
infoElena('Front-End', '380-505-321')

const infoArtem = person.logInfo.bind(tema)
infoArtem('Backend', '380-991-233')

///Example 3

function user () {
    console.log(this.name)
    console.log(this.age)
}

const anna = {
    name: 'Anna',
    age: 12
}

user.bind(anna)()

const pavel = {
  name: 'Pavel',
  age: 7
}

user.bind(pavel)()

///Example 4

function people () {
    console.log(this.name)
    console.log(this.age)
    console.log(arguments)
}

const andrey = {
    name: "Andrey",
    age: 31
}
people.call(andrey, 'user', 'id')

const stas = {
    name: 'Stas',
    age: 32
}

people.apply(stas, [true, 'yes'])