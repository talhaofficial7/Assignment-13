//funcation

//1. Write a js program to find cube of any number using function.
  function cube( x) {
console.log(x * x *x);
    
  }

  cube(5);
  cube(2);
  cube(3);

  //2. Write a js program to find diameter, circumference and area of circle using functions.


  Pi = 3.14;

  function diameter(r) {
    
    console.log( 2 * r);

    
  }
  function circumference(r) {
    

    console.log( 2 * pi * r);


  }
   function area(r) {
    console.log(2 * r * r);


    
   }

   diameter(5);
   diameter(4)
   area(3);

   //3. Write a js program to find maximum and minimum between two numbers using functions.
 function maximum(a , b) {
    var result = a + b;
    console.log(  result);
    
 }
 function minimum(c , d) {
    var result = c + d;

    console.log( result);
    
 }

 maximum( 40 , 20 );
 minimum( 20 , 10);

 //4. Write a js program to check whether a number is even or odd using functions.
 
 function isEven(n) {
    return n % 2 === 0;
  }

  
  function checkNumber(n) {
    if (isEven(n)) {
      console.log(n + " is even");
    } else {
      console.log(n + " is odd");
    }
  }
  
  checkNumber(10);
  checkNumber(7);


  //5. Write a js program to check whether a number is prime, Armstrong or perfect number using functions.

  function isPrime(n) {
    if (n <= 1) {
        return false;
    
    }
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
    
      }
    }
    return true;
  }
  
  function isArmstrong(n) {
    let sum = 0;
    let temp = n;
    while (temp > 0) {
      let digit = temp % 10;
      sum += digit * digit * digit;
      temp = Math.floor(temp / 10);
    }
    return sum === n;
  }
  
  function isPerfect(n) {
    let sum = 0;
    for ( i = 1; i < n; i++) {
      if (n % i === 0) {
        sum += i;
      }
    }
    return sum === n;
  }
  
  function checkNumber1(n) {
    if (isPrime(n)) {
      console.log(n + " is a prime number");
    }
    if (isArmstrong(n)) {
      console.log(n + " is an Armstrong number");
    }
    if (isPerfect(n)) {
      console.log(n + " is a perfect number");
    }
  }
 checkNumber1(23);
 checkNumber1(28);
 checkNumber1 (370);  


 //6. Write a js program to find all prime numbers between given interval using functions.
 function isPrime(n) {
    if (n <= 1) {
      return false;
    }
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function findPrimesBetweenInterval(start, end) {
    let primes = [];
    for (let i = start; i <= end; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
    return primes;
  }
  
  var start = 10;
  var end = 50;
  var primes = findPrimesBetweenInterval(start, end);
  console.log("Prime numbers between " + start + " and " + end + " are: " + primes);
  
 //8. Write a js program to print all Armstrong numbers between given interval using functions.

 
 function isArmstrong2(n) {
  let sum = 0 ;
  let temp = n;
  let digits = 0;
  let original = n;

  // Count the number of digits
  while (temp > 0) {
    digits++;
    temp = Math.floor(temp / 10);
  }

  temp = n;
  while (temp > 0) {
    let digit = temp % 10;
    sum += Math.pow(digit, digits);
    temp = Math.floor(temp / 10);
  }

  return sum === original;
}

function findArmstrongNumbersBetweenInterval(start, end) {
  for (let i = start; i <= end; i++) {
    if (isArmstrong(i)) {
      console.log(i);
    }
  }
}

// Test the function
var start = 1;
var end = 153;
findArmstrongNumbersBetweenInterval(start, end);

// 9. Write a js program to print all perfect numbers between given interval using functions.
 

function Perfectnum(n) {
  var sum = 0;
  for (var i = 1; i < n; i++) {
    if (n % i === 0) {
      sum += i;
    }
    
  }
  return sum ===n;
  
}
function findPerfectNumbersBetweenInterval(start, end) {
  for (let i = start; i <= end; i++) {
    if (isPerfect(i)) {
      console.log(i);
    }
  }
}

var start = 1;
var end = 10000;
findArmstrongNumbersBetweenInterval( start, end)

//10. Write a js program to find power of any number using function.

function power(x , y ) {

  console.log( x * y +" power ");
  
 }
  power(5,10)
  power(10,3)

  //11. Write a js program to print all natural numbers between 1 to n using function.
function isnatural(n) {
  for (var i =1; i< n; i++) {
    console.log(i);
    
  }
  
}
isnatural(10)

//12. Write a js program to print all even or odd numbers in given range using function.

function printEvenOrOddNumbers(start, end, type) {
  for (let i = start; i <= end; i++) {
    if (type === "even" && i % 2 === 0) {
      console.log(i);
    } else if (type === "odd" && i % 2 !== 0) {
      console.log(i);
    }
  }
}


printEvenOrOddNumbers(10, 20, "even"); 
printEvenOrOddNumbers(10, 30, "odd"); 



//13. Write a js program to find sum of all natural numbers between 1 to n using function.

var sum=0;
function sumNaturalnum(n) {
  for (var i =1; i <=n; i++){
    sum+=i;
  }
  console.log(sum);
}

sumNaturalnum(10);
sumNaturalnum(20);

//14. Write a js program to find sum of all even or odd numbers in given range using function.
var sum=0;
function sumEvenorOddnum(start, end, type) {
  for (var i =start; i <end; i++)
    {
      if (type === "even" && i%2 ===0) 
        {
          sum+=i;
        
      }
      else if(type==="odd"&&i%2 !==0){
        sum+=i;
      }
    }
    console.log(sum);
}

sumEvenorOddnum(20,30,"even");
sumEvenorOddnum(30,40,"odd");

//15. Write a js program to find reverse of any number using function.
function reversenum(n) {
  var reverse=0;
  while (n !==0) {
    var digit=n%10;
    reverse = reverse *10 +digit;
     n = Math.floor(n/10);
    
  }
  console.log(reverse);
}
reversenum(6789);

//16. Write a js program to check whether a number is palindrome or not using function.

function isPalindrome(n) {
  var original = n;
  var reversed = 0;
  while (n !== 0) {
    var digit = n % 10;
    reversed = reversed * 10 + digit;
    n = Math.floor (n / 10)
  }
  console.log(reversed);
}

isPalindrome(134562);
isPalindrome(123456);

// 17. Write a js program to find sum of digits of a given number using function.
 function sumofdigit(n) {
  while (n !==0) {
    var digit = n%10;
    sum+=digit;
    n=Math.floor(n/10);

    
  }
  console.log(sum);
  
 }
sumofdigit(1+2+3);

//18. Write a js program to find factorial of any number using function.
 function factorial(n) {
  var fac =1;
  for (let i =2;  i<=n ; i++) {
    fac*=i;
    
  }
  console.log(fac);
  
 }
 factorial(5);

 //19. Write a js program to generate nth Fibonacci term using function.
 function fibonacci(n) {
  var a = 0;
  var b = 1;
  for (let i = 2; i <= n; i++) {
    var temp = a;
    a = b;
    b = temp + b;
  }
  console.log(a && b);
  


}
fibonacci(9);
fibonacci(11)

//21. Write a js program to find LCM of two numbers using function.


function lcm(a, b) {
  function gcd(a, b) {
    if (b === 0) {
      return a;
    } else {
      return gcd(b, a % b);
    }
  }
  return (a * b) / gcd(a, b);
}


console.log(lcm(12, 15)); 
console.log(lcm(24, 30)); 


