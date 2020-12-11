const person = {
    name: 'Maxim',
    age: 25,
    greet: function () {
        console.log('greet')
    }
}

Object.prototype.sayHello = function () {
    console.log('Bye')
}

/// Example 1

const user = {
    name: 'Martin',
    age: 29,
    say: function () {
        console.log('Good bye')
    }
}

Object.prototype.sayName = function (name) {
    this.name = name
}

Object.prototype.repeat = function (propName, propValue) {
    this[propName] = propValue
}
//Example 2

const user1 = {
    name: 'Alex',
    age: 78,
    state: function () {
        console.log('He old')
    }
}

