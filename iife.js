// (IIFE) Immediately Invoked Function Expression
(function(){
    console.log("Hello from IIFE");
})();
// ()();
// first()-------> calls the function immediately
// (function(){}())-------> calls the function immediately
// Output: Hello from IIFE
// why use IIFE?
// 1. To avoid polluting the global namespace
// 2. To create a private scope for variables and functions
// 3. To execute code immediately without having to call it separately
// 4. To create a module pattern for better code organization
// 5. To avoid variable hoisting issues
// 6. To create a closure for data privacy
// 7. To improve performance by reducing the number of global lookups
// 8. To create a self-contained unit of code that can be reused
// 9. To avoid conflicts with other libraries or scripts that may use the same variable names
// 10. To create a more readable and maintainable code structure

  