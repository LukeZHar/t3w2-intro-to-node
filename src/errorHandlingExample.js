// try, catch, throw, finally

try {
    // Experimentation or execution
    // code that may throw an error
    let a = 15, b = 0;
    if (b == 0) {
        // throw "Trying to divide by zero..."
        throw new Error("New error: Division by Zero!")
    }

} catch (error) {
    // statements
    // handle the error
    console.log("Cannot divide by zero");
    console.log(error);
} finally {
    // always execute
    console.log("This will always execute");
}