//objects

//object literals 
const mySym= Symbol("key1")
const JsUser = {
    name: "nadir",
    "full name": "Syed Nadir Abbas Shah",
    [mySym]:"mykey1",
    age: 29,
    location:"faisalabad",
    email: "nadir@gmail.com",
    isLogedIn: false,
    lastLogedInDays:["Monday","Saturday"]
}
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);
JsUser.email= "nadirabbas@gmail.com"
// Object.freeze(JsUser);
JsUser.email= "nadirabbas72@gmail.com"
console.log(JsUser);


 JsUser.greeting = function(){
    console.log("hello js user");
}
JsUser.greetingTwo = function(){
    console.log(`hello js user ${this.name}`);
}
console.log(JsUser.greeting);
console.log(JsUser.greetingTwo())