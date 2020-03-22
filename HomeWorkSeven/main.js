//DZ1
let times = document.body.appendChild(document.createElement('h1'))

function recursia (sec) {
  setTimeout (function () {
    times.textContent = new Date().toLocaleString()
  },100 * sec)
  if (sec-- > 0) recursia(sec)
}
recursia(500)

//DZ2
var typeMessage = ( function ( velocity ) {
  let container =  document.body.appendChild (
          document.createElement ( "h3" )
      )
  container.style = `color : magenta`
  container.id = "demo"
  var index = 0
  return function ( message ) {
    let letter = message[index++]
    setTimeout(() => container.textContent += letter,1000 * index * velocity)
    index < message.length - 1 ? arguments.callee(message) : null
  }
})(1)

typeMessage ( 'Welcome to the hell' )

//DZ3

function User (name) {
  this.name = name
  this.id = this.counter()
}

var user = [
  new User('Semen'),
  new User('Anton'),
  
]