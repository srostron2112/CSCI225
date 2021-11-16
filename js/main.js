// Main Website Html for Loading Screen
//- Currently a work in progess..







// Calculator for Real Estate Loan Calculator

// all get elements for the buttons
document.getElementById('button5').addEventListener('click',display);
document.getElementById('button7').addEventListener('click',contactUs);
document.getElementById('button').addEventListener('click',calculateLoan);
document.getElementById('button3').addEventListener('click',home);
//goes home
function home(){
    window.location=("index.html");
}
//goes to contact page
function contactUs(){
    window.location=("index.html");
}
//displays or hides page
function display(){
    var seen = document.getElementById("form").style.visibility="visible";
    var hide = document.getElementById("test").style.visibility="hidden";
}
//calcs loan
function calculateLoan(){
    var seen = document.getElementById("form").style.visibility="hidden";
    var hide = document.getElementById("test").style.visibility="visible";
    var loanAmount = parseInt(document.getElementById('input1').value);

    var interestRate = parseFloat(document.getElementById('input2').value);
    interestRate = parseFloat(interestRate / 100);

    var loanTerm = parseInt(document.getElementById('input3').value);

    var date = parseInt(document.getElementById('year').value);

    var month = document.getElementById('date').selectedIndex;
    
    var balance = loanAmount;
    
    var monthlyInterestRate = parseFloat(interestRate/12);
    //monthly payment 1
    var mp1 = loanAmount*((monthlyInterestRate*(Math.pow((1.00+monthlyInterestRate),loanTerm*12))));
    //monthly payment 2
    var mp2 = Math.pow((1.00+monthlyInterestRate),(loanTerm*12))-1;
    var monthlyPayment = mp1/mp2;
    //sets rate 2 places
    var mp = monthlyPayment.toFixed(2);
    var interestPaidPerMonth = balance * monthlyInterestRate;
    var principalPaidPerMOnth = monthlyPayment-interestPaidPerMonth;

    //declares payment
    var interestpayment = 0;
    var principalpayment = 0;
    // sets results
    var result ="<p id=\"mp\">Monthy Payment is: "+mp+"</p><table>";
    for(var i=1; i<=loanTerm; i++){
        if(i==1)
            result += "<tr>"+"<th>Date </th>"+" <th>Interest </th>"+"<th>Principal </th>"+" <th>Balance </th>"+"</tr>";
        result += "<tr>";
        for(var j=1; j<=12; j++){
            interestPaidPerMonth = balance * monthlyInterestRate;
            principalPaidPerMOnth = monthlyPayment-interestPaidPerMonth;
            balance = balance-principalPaidPerMOnth;
            var bb = balance.toFixed(2);
            interestpayment += interestPaidPerMonth;
            var ii = interestpayment.toFixed(2);
            principalpayment += monthlyPayment-interestPaidPerMonth;
            var pp = principalpayment.toFixed(2);
        }
        result += "<td>"+(month+1)+"/"+(date)+"-"+(month+1)+"/"+(date+1)+" </td> <td>$"+ii+"</td><td> $"+pp+" </td><td>$"+bb+"</td>";
        date++;
        var test = document.getElementById('test');
        test.innerHTML = result;
        interestpayment=0;
        principalpayment=0;
        result += "</tr>"
    }
    result = "</table>";
}