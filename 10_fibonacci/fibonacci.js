const fibonacci = function(n) {
  if(n < 0) return "OOPS"
  if(n === 0) return 1;
  let prev = 1;
  let prevPrev = 0;
  for(let i = 2; i <= n; i++) {
    let current = prev + prevPrev
    prevPrev = prev
    prev = current
  }

  return prev
};

// Do not edit below this line
module.exports = fibonacci;
