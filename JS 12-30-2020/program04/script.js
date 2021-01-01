var n, i, m;

n = parseInt(prompt("Enter a Number"))

for (i=2; i <= n-1; i++) {
    if(n%i == 0) {
        m = false;
        break;
    }
    console.log(i);
}

if (m == true) {
    alert (`${n} is prime`)
} else {
    alert (`${n} is not prime`)
    
}
