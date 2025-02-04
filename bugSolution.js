function foo(a, b) {
  // Use loose equality to handle type coercion or explicit null checks
  if (a == null || b == null) {
    // Handle null values appropriately, for instance by returning 0 or throwing an error
    return 0; // or throw new Error("Null values not allowed");
  }
  return a + b;
}

console.log(foo(1, null)); // Output: 0
console.log(foo(null, 1)); // Output: 0
console.log(foo(1, 2)); // Output: 3