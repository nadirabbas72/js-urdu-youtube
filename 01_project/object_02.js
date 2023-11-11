// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "1223abc"
tinderUser.name ="TOmay"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName:"Nadir",
            lastName: "Abbas"
        }
    }
}
// console.log(regularUser.fullName.userFullName.firstName);

const obj1 ={1:"a", 2:"b"}
const obj2 ={3:"c", 4:"d"}
const obj4 ={5:"d", 6:"e"}
// const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = {...obj1, ...obj2}
console.log(obj3);