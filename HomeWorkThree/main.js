///HomeWork
//DZ1
function func(){
    console.log(arguments.callee.name);
for(var i = 0 ; i < arguments.length; i++){
    console.log(arguments[i]);
}
}
func(false, 10 , "google");
//DZ2
var objOne = {
        name: "Irirna",
        registered: true,
        data:  new Date(),
        getInfo: userInfo
}

var objTwo = {
    name: "Ivan",
    registered: false,
    data: new Date(),
    getInfo: userInfo
}

function userInfo(){
    if(objOne.registered == true) {
        console.log("Date = ", this.data)
}else{
    console.log("No register = ", this.name);
}
    if(objTwo.registered == true) {
        console.log("Date = ", this.data)
}else{
    console.log("No register = ", this.name)
}
}
objOne.getInfo = userInfo;
objTwo.getInfo = userInfo;
objOne.getInfo();
objTwo.getInfo();

