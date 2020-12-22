// console.log('Request data...')

// setTimeout(() => {
//     console.log('Prepering data')

//     const backendData = {
//         server: 'aws',
//         port:200,
//         status: 'working'
//     }

// setTimeout(() => {
//     backendData.modified = true
//     console.log('Data received', backendData)
// }, 2000)
// }, 2000)

//example 1
// const p = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         console.log('Preparing data promise...')
//         const backaendDataP = {
//             server: 'aws',
//             port: 200,
//             ststus: 'Working'
//         }
//         resolve(backaendDataP)
//     }, 2000)
    
// })

// p.then(backaendDataP => {
//     console.log('Promise resolve...')
//     console.log(backaendDataP)
// })

//example 2

// console.log('_______________')
// console.log('Start promise ')

// new Promise((resolve, reject) => {
//     Math.random() > 0.4 ? resolve({
//         name: 'Google',
//         type: 'service'
// }): reject(new Error('The promise was rejected'))
// })

// .then(
//     data => console.log(data),
//     err => console.log(err, data)
// )

//example 3

// const prom = message => new Promise(
//     resolve => setTimeout(() => resolve(message),
//     Math.random() * 3000
//     )
// ) .then(resp => console.log(resp))

// const first = () => prom('First')
// const second = () => prom('Second')
// const third = () => prom ( "Third" )

// first().then ( () => second().then ( () => third() ) )

// example 3

// let prom1 = new Promise((resolve, reject) => {
//     console.log('Start promise')
//     setTimeout(() => {
//         const obj = {
//             name: 'Pavel',
//             hobby: 'drive'
//         }
//         resolve(obj)
//     }, 3000)
// })

// prom1.then(data => {
//   console.log(data)
// }).then((data1) => {
//   const obj1 = {
//       name: 'Ludmila',
//       hobby: 'Teacher'
//   }
//   console.log('Data 1 = ', obj1)
// })

//example 4

// const promAnim = new Promise((resolve, reject) => {
//   setTimeout(() => {
//       let anim = {
//           name: 'Myrchik',
//           age: 2
//       }
//       resolve(anim)
//   }, 2000)
  
 
//   })
 
// promAnim.then(data=> {
//   console.log(data)
// })

// example 5

// function firstAn () {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const an1 = {
//                 name: 'Barsik',
//                 age: 5
//             }
//             resolve(an1)
//         },10000)
//     })
// }
// function secondAn () {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const an2 = {
//                 name: 'Bublik',
//                 age: 4
//             }
//             resolve(an2)
//         }, 2000)
//     })
// }

// function threeAn () {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           const an3 = {
//               name: 'Suslik',
//               age: 6
//           }
//           resolve(an3)
//         }, 6000)
//     })
// }

// const promises1 = firstAn()
// const promises2 = secondAn()
// const promises3 = threeAn()

// promises1
//   .then(response => console.log(response))
//   .then(() => promises2.then(response => console.log(response)))
//   .then(() => promises3.then(response => console.log(response)))

//exampl 6

// const sleep = ms => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(), ms)
//     })
// }
// sleep(3000).then(() => console.log('After 3 second'))
// sleep(2000).then(() => console.log('After 2 second'))

//example 7

function student1() {
    return new Promise((resolve, rejerct) => {
        setTimeout(() => {
            const student = {
                name: 'Mikle',
                age: 22
            }
            resolve(student)
        },2000)
    }) 
}

function student2 () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const student = {
                name: 'Jon',
                age: 21
            }
            resolve(student)
        },6000)
    })
}

const studentOne = student1()
const studentTwo = student2()

studentOne
.then(response => console.log(response))
.then(() => studentTwo.then(response => console.log(response)))