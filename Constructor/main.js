var Girl = function (name, age) {
    var defaultName = 'Gane'

    this.name = name || defaultName
    this.age = age || 25

    function showName (name) {
        console.log(`Меня зовут ${name}`)
    
    this.changeName = function(newName) {
        this.name = newName
        showName(this.name)
    }
    }
}

var anna = new Girl()
anna.changeName
///Card 

var Card = function () {
    var pin = prompt('Enter your pin code')
    var cash = 5000

    function show () {
        if (pin === prompt('Enter your pin code')){
            console.log(cash)
        }else {
            console.warn('Error')
        }
    }

    this.changeShow = function (numShow) {
       this.newShow = numShow
       show(this.changeShow)
    }

    function getCash (number) {
        if (pin === prompt('Enter pin get')) {
            number = prompt('Vvedite cash get')
            if (number <= cash){
               cash -= number 
               console.log(`Vas cash = ${number}`)
               console.log(`Ostatok = ${cash}`)
               }
               else console.log('Malo deneg')          
        }
    }

    this.getPublicCash = function (item) {
        this.newCashGet = item
        getCash(this.newCashGet)  
    }
    function putCash (number) {
        if (pin === prompt('Enter pin')) {
          number = +prompt ('Enter cash put')
          if (number > 0) {
             cash += number
              console.log(`Vas cash = ${cash}`)
              console.log(`Vi vveli = ${number}`)
          }  else console.log('your enter otritchanie number')
        } else console.log('Error pin')
    }
    
    this.putPublicCash = function (item) {
        this.newCashPut = item
        putCash(this.newCashPut)
    }
}
var user = new Card()
// Example 1

var User = function (name, age) {
  this.name = name
  this.age = age

}
var Vitalik = new User('Vitalik', 28)
User.prototype.skill = function () {
    console.log('My skill this React')
}
var Pavel = new User('Pavel', 25)
