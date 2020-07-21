// Create a Class User with properties as name, age & email.
// He can login and logout
// Create another class Moderator which has all the features of User, plus additional functionality to Addcoins and remove coins.
// Create one more class Admin which has all the features of Moderator plus additional features like add aCourse and delete a particular course for a user.

class User {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.coins = 0;
        this.course = [];
    }
    login() {
        console.log(`${this.name} has logged in.`);
    }
    logout() {
        console.log(`${this.name} has logged out.`)
    }
   
}

class Moderator extends User {
    addCoins(user, nOfCoins) {
        user.coins += nOfCoins;
        console.log(`${nOfCoins} coins were added in ${user.name}'s account`);
    }
    removeCoins(user, nOfCoins) {
        user.coins -= nOfCoins;
        console.log(`${nOfCoins} coins were removed from ${user.name}'s account`)
    }
}

class Admin extends Moderator {
    addCourse(user, courseName) {
        user.course.push(courseName);
        console.log(`${courseName} has been added in ${user.name}'s account`);
    }
    deleteCourse(user, courseName) {
        user.course = user.course.filter(cn => cn != courseName);
        console.log(`${courseName} has been deleted from ${user.name}'s account`);
    }
}




let user1 = new User('Rahul', 27, 'rahul@Spt.com');
let user2 = new User('Kumar', 27, 'kumar@Spt.com');
let user3 = new User('Rai', 27, 'rai@Spt.com');

let mod = new Moderator('Rohit', 29, 'asd@asd.com');

let adm = new Admin('Manoj', 52, 'mkrai@asd.com');

let users = [user1, user2, user3, mod, adm];
users.forEach(element => console.log(element));

mod.addCoins(user1, 5);
console.log(user1);
mod.removeCoins(user1, 2);
console.log(user1);

adm.addCourse(user1, 'JavaScript');
console.log(user1);
adm.addCourse(user1, 'React');
console.log(user1);
adm.addCourse(user1, 'History');
console.log(user1);

adm.deleteCourse(user1, 'History');
console.log(user1);

users.forEach(element => console.log(element));