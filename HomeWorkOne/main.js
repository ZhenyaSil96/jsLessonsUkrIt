///HomeWork
//DZ1
var letters = []
var str = "Backend As A Service";
console.log(str.split());
letters.push(str[0]);
letters.push(str[8]);
letters.push(str[11]);
letters.push(str[13]);
console.log(letters);
var resultLetters = letters.join(",");
console.log(resultLetters);

//DZ2
function func(num){
    if( Number(num)){
        var data = new Date();
         console.log( data);
    }else{
         console.log( "invalid data type")
    }
}
func("s");


////independent work

var group = [
    {
        name: "Vasya",
        lasteName:"Login",
        age:12,
        notebook:false,

    },
    {
        name: "Kotik",
        lasteName:"White",
        age:22,
        notebook:true, 
    },
    {
        name: "Belosnejka",
        lasteName:"Bad",
        age:60,
        notebook:false,
    }
];

function getStudentsList(arrayOfStudents){
    var studentJSON = [];
    var studentString = [];

    for(var student of arrayOfStudents){
        studentJSON.push(JSON.stringify(student));
        var currentStudent = "";
        for(var svoystvoStudent in student){
            currentStudent += svoystvoStudent + ":" + student[svoystvoStudent] + " "
        }
        studentString.push(currentStudent);
        console.log("studentJson = " + studentJSON);
        console.log("studentString = " + studentString);
    }
}
getStudentsList(group);
////DZ2
function addNewStudent(name,lasteName,age, notebook ){
    group.push(name, lasteName, age, notebook);
}
addNewStudent("Egor", "Paskuche", 20, false);
getStudentsList(group);


///DZ4

let arr = [3, 2, 1, 1, 5, 4];
function f(){
newArr = [];
for (; arr.length;)  { newArr.push(arr.splice(arr.indexOf(Math.min(...arr)),1)[0])}
console.log(newArr)
}
f();

///DZ5
let name = ["Lontik"];
let surname = [" Big"];
let newArray;

newArray = name[0].concat(surname[0]);
console.log(newArray);

