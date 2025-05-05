function demonstrateTDZ() {
    // Start of the function's block scope
  
    console.log(myConst); // This line is within the TDZ for `myConst`
  
    const myConst = 100; // Declaration and initialization line
  
    console.log(myConst); // This line is outside the TDZ for `myConst`
}

demonstrateTDZ();

