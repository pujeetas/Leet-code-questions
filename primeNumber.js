function prime(n) {
  let arr = [];
  for (let i = 2; i <= n; i++) {
    if (n % i === 0) {
      console.log(i);
    }
  }
}

console.log(prime(50));
