let request = new XMLHttpRequest()
request.open('GET', 'https://api.github.com/users')
request.onload = function (event) {
    if (this.readyState === 4 && this.status === 200){
        console.log(this.responseText)
    }
}
//request.send()

let requestG = new XMLHttpRequest()
requestG.open('GET', 'http://localhost:3000/posts')
requestG.onload = function (event) {
    if (this.readyState === 4 && this.status === 200){
        console.log(this.responseText)
    }
}
requestG.send()
// example 1

var transport = new XMLHttpRequest()
transport.open('GET', 'https://httpbin.org/get')

transport.responseType = ArrayBuffer

transport.onload = function (event) {
    this.readyState === 4 ? this.status === 200 ?
      console.log(this.response): 
      console.error('This error'):
      null
}

//transport.send()
///
let userAlex = {
    name: 'Alex', 
    age: 30,
    hobby: 'JS'
}

var requestGet = new XMLHttpRequest
requestGet.open('POST', 'http://localhost:3000/posts')
requestGet.setRequestHeader('Content-Type', 'application/json')
requestGet.onload = function (event) {
    this.status === 200 
    console.log(this.responseText)
}
//requestGet.send(JSON.stringify(userAlex))

let userPavel = {
    name: 'Pavel',
    age: 28,
    hobby: 'C++'
}

let requestPavel = new XMLHttpRequest
requestPavel.open('POST', 'http://localhost:3000/posts')
requestPavel.setRequestHeader('Contnent-Type', 'application/json')
requestPavel.onload = function (event) {
  this.status === 200
  console.log(this.responseText)
}

//requestPavel.send(JSON.stringify(userPavel))

let userMary = {
    name: 'Mary', 
    age: 15,
    hobby: 'HTML'
}

var requestMary = new XMLHttpRequest
requestMary.open('POST', 'http://localhost:3000/posts')
requestMary.setRequestHeader('Content-Type', 'application/json')
requestMary.onload = function (event) {
    this.status === 200 
    console.log(this.responseText)
}
//requestMary.send(JSON.stringify(userMary))

//comments

let objComment = {
    name: 'Anna',
    age: 24,
    job: 'PM'
}

var transportComment = new XMLHttpRequest
transportComment.open('POST', 'http://localhost:3000/comments')
transportComment.setRequestHeader('Content-Type', 'application/json')
transportComment.onload = function (event) {
    this.status === 200 
    console.log(this.responseText)
}
//transportComment.send(JSON.stringify(objComment))

var transportCommentGet = new XMLHttpRequest
transportCommentGet.open('GET', 'http://localhost:3000/comments')
transportCommentGet.onload = function (event) {
  this.status === 200
  console.log(this.responseText)
}
transportCommentGet.send()