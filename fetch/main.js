// let quest = new XMLHttpRequest
// quest.open('GET', 'http://localhost:3000/posts/')
// quest.onload = function () {
//     this.status === 200
//     console.log(this.responseText)
// }

///quest.send()

let obj = {
    name: 'Vasay',
    age: 20
}

// let question = new XMLHttpRequest
// question.open('POST', 'http://localhost:3000/posts')
// question.setRequestHeader('Content-Type', 'application/json')
// question.onload = function() {
//     this.status === 200
//     console.log(this.responseText)
// }
//question.send(JSON.stringify(obj))

// example 1

// fetch('http://localhost:3000/posts', {
//     method: 'GET',
//     headers: {
//         'Content-Type':
//         'application/json'
//     }
// })
//.then(response => response.json())
//  .then(response => console.log(response))

// example 2

let obj1 = {
    name: 'Pavel',
    age: 21
}

// fetch('http://localhost:3000/posts', {
//     method: 'POST',
//     headers: {
//         'Content-Type':'application/json'
//     },
//     body: JSON.stringify({
//             name: 'Pavel',
//             age: 21
//     })
// })

//.then(response => response.json())
 // .then(response => console.log(response))

//  fetch('http://localhost:3000/posts')
//  .then(response => response.json())
//  .then(response => console.log(response))

///Delete

// fetch('http://localhost:3000/posts/4', {
//     method: 'DELETE'
// })

//.then(response => response.json())
//.then(response => console.log(response))

// fetch('http://localhost:3000/posts')
// .then(response => response.arrayBuffer())
// .then(response => console.log(response))

let obj2 = {
    name: 'Vi',
    age: 28,
    hobby: 'Kill'
}
let obj3 = {
    name: 'Jhon Vik',
    age: 35
}

// fetch('http://localhost:3000/posts', {
//     method: 'POST',
//     headers:{'Content-Type': 'application/json'},
//      body: JSON.stringify(obj3)
// })

// .then(reponse => reponse.json())
// .then(response => console.log(response))

///Example 3 Request

var request = new Request('https://httpbin.org/post', {
    method: 'POST',
    mode: undefined,
    headers: new Headers({
        'Content-Type':'application/json'
    }),
    body: 'google'
})

fetch(request)
  .then(response => {
      response.status === 200 ?
      response.json()
        .then(answer => console.log(answer.data)):
          console.log.warn(response.type)
  })

/// example 4

// fetch('http://localhost:3000/posts/4', {
//     method: 'DELETE'
// })


// fetch('http://localhost:3000/comments', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         name: 'Lolita',
//         age:45 
//     })
// })

// .then(response => response.json())
// .then(response => console.log(response))

// fetch('http://localhost:3000/comments')
//   .then(response => response.json())
//   .then(response => console.log(response))

//   fetch('http://localhost:3000/comments', {
//       method: 'POST',
//       headers: {
//           'Content-Type':'application/json'
//       },
//       body: JSON.stringify({
//          name: 'Polya',
//          job: 'SMM'
//       })
//   })

//   .then(response => response.json())
//   .then(response => console.log(response))

let user = {
    name: 'Bob',
    job: 'Java-development'
}

// fetch('http://localhost:3000/comments', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(user)
// })

// .then(response => response.json())
// .then(response => console.log(response))


fetch('http://localhost:3000/comments/5', {
    method: 'PUT',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({
        name: 'Jimi'
    })
})

.then(response => response.json())
.then(response => console.log(response))

// fetch('http://localhost:3000/comments', {
//     method: 'POST',
//     headers:{'Content-Type': 'application/json'},
//     body: JSON.stringify({
//         name: 'Bob Kelso',
//         age: 80
//     })
// })

// .then(response => response.json())
// .then(response => console.log(response))

fetch('http://localhost:3000/comments/6', {
    method: 'PATCH',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({
        age:82
    })
})

.then(response => response.json())
.then(response => console.log(response))