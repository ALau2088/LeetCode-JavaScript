/**
 * @param {number} n
 * @return {number}
 */

/*
 
I: int
O: int
C: none
E: 0 or 1 return 0,

I:10
O: 4

2 -> 2 = 2 -> prime
3 -> 3 % 2 = 1 -> prime
4 -> 4 % 2 = 0 -> not prime
5 -> 5 % 2 = 1 -> prime
6 -> not prime
7 -> not prime
8 -> not prime
9 ->  9 % 3 = 0 -> not prime

time: O(n*n^1/2) time
space: O(n)

*/

var countPrimes = function (n) {
  var _isPrime = function (number) {
    let j = 2;
    // check if i is prime by trial division
    while (j <= Math.floor(Math.sqrt(number))) {
      if (number % j === 0) {
        return false;
      } else {
        j++;
      }
    }
    return true;
  };

  if (n === 0 || n === 1 || n === 2) {
    return 0;
  } else {
    let primeCount = 0;
    for (let i = 2; i < n; i++) {
      if (_isPrime(i)) primeCount++;
    }
    return primeCount;
  }
};

// Optimization 1 - Sieve of Eratosthenes
/*
 
I: int
O: int
C: none
E: 0 or 1 return 0,

I:10
O: 4

create arr for vals 2 to n
using sieve of eratosthenes

2 -> 2 = 2 -> prime
3 -> 3 % 2 = 1 -> prime
4 -> mult of 2 -> not prime
5 -> 5 % 2 = 1 -> prime
6 -> mult of 2 -> not prime
7 -> not prime
8 -> mult of 2 -> not prime
9 ->  mult of 3 -> not prime


time complexity is O(nlog(logn))
*/

var countPrimes = function (n) {
  let primeCount = 0;
  if (n === 0 || n === 1 || n === 2) {
    return 0;
  } else {
    // create arr
    const prime = [];
    prime[0] = null;
    prime[1] = null;
    // mark all values as true initially
    for (let i = 0; i < n; i++) {
      prime[i] = true;
    }

    // iterate thru values up to n-1 and mark numbers that are not prime
    // for (let i = 2; i < n; i++){
    // optimization only need to iterate up to square root of n because at other factor will be covered when multiplied by k
    for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
      if (prime[i] === true) {
        // mark all multiples as not prime
        for (let k = i * i; k < n; k += i) {
          prime[k] = false;
        }
      }
    }
    for (let i = 2; i < prime.length; i++) {
      if (prime[i] === true) primeCount++;
    }
    return primeCount;
  }
};
