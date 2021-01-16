// class User {
//     constructor(name) {
//      var privateVar = prompt('Entre private value')
//      function showPrivate () {
//          console.log(`Контекст вызова ${this}`)
//          console.log(`Приватная переменная ${privateVar}`)
//      }
//      this.name = name || 'Вася'
//      this.show = function () {
//          showPrivate()
//      }
//     }
// }

// var user = new User('Петя')
// user.show()

//example 2 V
// class Animal {
//     static type = 'ANIMAL'
//     constructor(options) {
//         this.name = options.name
//         this.age = options.age
//         this.hasTail = options.hasTail
//     }
//     voice() {
//         console.log('I am Animal')
//     }
// }
// // const animal = new Animal({
// //     name: 'Animal',
// //     age: 5,
// //     hasTail: true
// // })

// class Cat extends Animal {
//     constructor(options){
//         super(options)
//         this.color = options.color
//     }
// }

// const cat = new Cat({
//     name: 'Barsik',
//     age: 2,
//     hasTail: true,
//     color: 'red'
// })

// class Dog extends Animal {}

// const dog = new Dog({
//     name: 'Buldog',
//     age: 1,
//     hasTail: false
// })

// class Mouse extends Animal {}

// const mouse = new Animal({
//     name: 'Miki',
//     age: 4,
//     hasTail: true
// })

//example 2

class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }
    hide() {
       this.$el.style.display = 'none'
    }
    show() {
        this.$el.style.display = 'block'
    }
}

class Box extends Component{
    constructor(options) {
        super(options.selector)
        this.$el.style.with = this.$el.style.height = options.size + 'px'
        this.$el.style.background = options.color

    }
}

const box = new Box({
    selector: '#box1',
    size: 100,
    color: 'red'
})


class Circle extends Box{
  constructor (options) {
     super(options)

     this.$el.style.borderRadius = '50%'
  }
}

const c = new Circle({
    selector: '#circle',
    size: 90,
    color: 'green'
})

//example 3

class Sample {
    constructor() {
        this.name = 'User',
        this.age = 22
    }
}

const sample = new Sample
Sample.prototype.skill = function () {
    console.log('JS')
}

//example 4 

class Parent {
    constructor () {
        this.type = type
    }
    getType() {
        console.log(this.type)
    }
}

class Child extends Parent{
    constructor (name, type) {
       super(type)
       this.name = name
    }
    getName() {
        console.log(this.name)
    }
}
const child = new Child
const us = new Child ('Tema', 'human')