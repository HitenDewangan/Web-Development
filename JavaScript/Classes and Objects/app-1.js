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
};

karanArjun.__proto__ = employee;

console.log(karanArjun);

karanArjun.calcTAx(); // now calcTAx is a method of karanArjun object