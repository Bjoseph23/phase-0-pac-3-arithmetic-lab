function add(a,b) {
    return a+b
}
function subtract(a,b) {
    return a-b
}
function multiply(a,b) {
    return a*b
}
function divide(a,b) {
    return a/b
}
function increment(n) {
    return n + 1;
}  
function decrement(n) {
     return n - 1;
}
  const num = 10;
  function makeInt(n) {
   const parsedInt = parseInt(n, 10);
    if (isNaN(parsedInt)) {
      return NaN; 
    } else {
      return parsedInt; 
    }
}