var first, second, third, avr;

first = parseFloat(prompt("Enter First subject's grades", 0));
second = parseFloat(prompt("Enter Second subject's grades", 0));
third = parseFloat(prompt("Enter Third Subject's grades", 0));

avr = (first+second+third)/3
if(avr > 80) {
    alert('you are above standard, Admission Granted!')
} else {
    alert('Better luck next time!!')
}