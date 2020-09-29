
// const user = {
//     username: "felix",
//     userSurname: "franko",
//     age: 37,
//     isMember: true
    
// }

// console.log(user.userSurname);
// console.log(user['userSurname']);

// const propName = "userName";

// const user = {
//     userName: "cilginCocuk",
//     userPass: "abc123",
//     age: 15,
    // loginUser: function() {
    //     console.log("user logged in");
    // }
   // login() {
       // console.log(this)
        // console.log(this.userName + " logged in");
  //  }
//}


// user.login();

class User {
    constructor(name, pass, age) {
        this.userName= name;
        this.userPass= pass;
        this.userAge= age;
    }
}

const myUser_1 = new User("albert", "emc2", 24);
const myUser_2 = new User("thomas", "tesla", 22);
console.log(myUser_1);
console.log(myUser_2);