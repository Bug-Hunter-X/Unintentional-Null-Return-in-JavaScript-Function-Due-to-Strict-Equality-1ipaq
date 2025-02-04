# Unintentional Null Return in JavaScript Function Due to Strict Equality

This repository demonstrates a subtle bug in JavaScript related to null checks and strict equality. The `foo` function is intended to add two numbers, but it unexpectedly returns `null` if either input is `null`, regardless of the value of the other input.

The issue stems from using the strict equality operator (`===`) within the conditional.  While this approach is generally good for precise null checks, it can lead to unintentional behavior in this scenario.  The solution demonstrates an alternative approach that uses loose equality (`==`) or type checking to provide a more robust solution that handles null inputs more flexibly.

## Bug
The original `bug.js` file contains the erroneous implementation.  The code works correctly when both inputs are numbers but produces unexpected `null` returns if either parameter is `null`.

## Solution
The `bugSolution.js` file provides a corrected version of the `foo` function that addresses the null handling more gracefully, providing a more expected behavior.