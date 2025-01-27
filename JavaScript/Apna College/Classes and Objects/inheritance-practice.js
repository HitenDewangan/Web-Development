let DATA = "secret information";

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("data", DATA);
    }
}

class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }
    editData() {
        DATA = "new secret information";
    }
}

let student1 = new User("Rayna", "rayna@j.com");
let student2 = new User("Matt", "matt@j.com");

let Admin1 = new Admin("Tony", "tony@admin.com");