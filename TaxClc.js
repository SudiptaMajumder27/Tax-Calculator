function calculateTax() {
    const income1= parseFloat(document.getElementById("grossIncome").value);
    const income2= parseFloat(document.getElementById("extarIncome").value);
    const donate= parseFloat(document.getElementById("deductionPrice").value);
    
    const calculate = (income1 + income2 - donate);

    const age = parseInt(document.getElementById("ageGroup").value);
    let tax = 0;

    if (calculate <= 800000) {
        tax = 0;
    } else if (calculate > 800000) {
        if (age < 40) {
            tax = 0.3 * (calculate - 800000);
        } else if (age >= 40 && age < 60) {
            tax = 0.4 * (calculate - 800000);
        } else if (age >= 60) {
            tax = 0.1 * (calculate - 800000);
        }
    }
    

    
      alert(`
        Your overall income will be
           ₹${tax.toFixed(2)} 
           after tax deduction`
        );
    

    
       
}
