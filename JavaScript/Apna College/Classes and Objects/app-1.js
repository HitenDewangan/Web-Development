const employee = {
    calcTAx() {         // this is preffered
        console.log("tax rate is 10%");
    },
    // calcTAx2 : function() {       // this is not preffered
    //     console.log("tax rate is 20%");
    // }
};

const karanArjun = {
    salary : 500000,
    calcTAx() {
        console.log("inside object, tax rate is 20%");
        
    }
};

karanArjun.__proto__ = employee;

console.log(karanArjun);

karanArjun.calcTAx(); // now calcTAx is a method of karanArjun object

// note : if object has a method with same name as of a property, it will override the property
// the property is called shadowing, nearest property wins