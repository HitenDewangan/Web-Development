class Parent {
    hello() {
        console.log("hello, inherited from Parents");
        
    }
}

class Child extends Parent {
    hello_child() {
        console.log("hello, inherited from Child");
    }
}

let c = new Child();
c.hello();
c.hello_child();