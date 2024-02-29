function isPerfectSquare(x) {
    let s = parseInt(Math.sqrt(x));
    return (s * s === x);
}

function isFibonacci(num) {
    // Check if the number is a non-negative integer
    if (num < 0) {
        return false;
    }
    
    // Using the property that a number is a Fibonacci number if and only if
    // one or both of (5*n^2 + 4) or (5*n^2 - 4) is a perfect square
    return isPerfectSquare(5 * num * num + 4) || isPerfectSquare(5 * num * num - 4);
}

// Example usage
const input = parseInt(prompt("Enter a number"), 10);
alert(isFibonacci(input));
