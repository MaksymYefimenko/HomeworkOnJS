       let totalProfit;
       let totalAmount;
       let initialAmount1 = prompt('Hwo much you want to put in your bank account?');
       let initialAmount = Number(initialAmount1);
        if (typeof (initialAmount) !== 'number'){
            alert("You can't use Letters only figures")
        }
        if(initialAmount <999) {
             alert('You should print a number more then 1000');
            }
       let years = prompt('For so many years?');
       let numberOfYears = Number(years)
        if(typeof (numberOfYears) !=='number'){
            alert("You can't use Letters only figures")
        }
        if (numberOfYears <= 0) {
             alert('The deposit must be on 1 year or more');
        }
    
       let procent = prompt('What is the annual percentage?');
       let procentageOfYear = Number(procent)
        if(typeof (procentageOfYear) !== 'number'){
            alert("You can't use Letters only figures")
        }
        if (procentageOfYear >= 100) {
              alert("Procentage can't be more then 100%");
        }
        totalAmount = (initialAmount * Math.pow(1 + procentageOfYear / 100, numberOfYears)).toFixed(2);
        totalProfit = (totalAmount - initialAmount).toFixed(2);  
        alert( "Initial Amount "+initialAmount+
               " Nomber of year "+numberOfYears+
               " Total Amount: " +totalAmount+ 
               " Total Profit: "+totalProfit); 