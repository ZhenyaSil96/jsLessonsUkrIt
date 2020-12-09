//for..of
let iterArr = [10, 20, 30]
for(var iter of iterArr){
    iter /= 10
    console.log(iter)
}
///String
let iterString = 'ABCDEF'
for (var iterSt of iterString){
    console.log(iterSt)
}
///TestBrackets 
function testBrackets(string) {
    let brackets = {
        '[':']',
        '{':'}',
        '(':')'
    }
    let stack = [], result = ''
    for (let symbol of string){
        if( !brackets [ symbol ] && stack.length === 0 ) return false
        brackets [ symbol ] ? stack.push ( symbol ) : symbol = brackets [ stack.pop() ]
        result += symbol

    }
    return result === string && stack.length === 0
} 

///Object arguments
function showArguments() {
    for (var arg of arguments){
        console.log(arg)
    }
}
showArguments(3, false)
////for...of continue
var cities = [
    "Киев",
    "Львов",
    "Харьков",
    "Одесса",
    "Монреаль",
    "Копенгаген",
    "Вена",
    "Лондон"
]
for (var it of cities){
    if(it === 'Вена')continue
    console.log(it)
}
///for...of break
var cities1 = [
    "Киев",
    "Львов",
    "Харьков",
    "Одесса",
    "Монреаль",
    "Копенгаген",
    "Вена",
    "Лондон" 
]
for(var iter of cities1){
    if(iter === 'Вена')break
    console.log(iter)
}
///for..in
///Example 1
let user = {
    name: 'Irina',
    age: 18,
    hobby: 'JS'
}

for (var iter in user){
    console.log(`user = ${iter}`)
    console.log(`user[iter] = ${user[iter]}`)
}
///Example 2
var iteratedObj = {
    name: 'Alex',
    animal: true,
    age: 3
}
for (var iter in iteratedObj) {
    console.log(iter + ':' + iteratedObj[iter])
}
///Example 3 for..in

var article = {
    title: 'Canvas',
    text: 'We will also look into how image smoothing',
    likes: 0
}

for (var prop in article){
    console.log(article[prop])
}
/// Example 4 for..in
var obj = {
    11: 'Canvas',
    1: 'We will',
    0: 0
}
for(var prop in obj ){
    console.log(prop + ':' + obj[prop])
}