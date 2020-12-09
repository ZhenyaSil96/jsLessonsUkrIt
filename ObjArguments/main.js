function argumTest () {
    console.log(arguments.callee.name)
}
argumTest() //argumTest
///Get param

function getParam (param) {
    return param ? param : arguments.callee
}
var x = getParam()

/// this na object
//Example 1
var human = {
  name: 'Pavel',
  age: 25,
  say: function () {
      console.log(this)
  }
}
human.say()

/// Example 2
var user = {
    name: 'Max',
    work: function () {
        console.log(this)
    }
}
user.work()

/// this kak object
//Examle 1
function say() {
    console.log('function say', this)
}
function girl () {
    console.log('function girl', this)
}

girl.say = say
girl.say()
girl() //