function fizzBuzz () {
    for (var i =1; i <= 100; i++) {
        console.log("i is: " + i);
        if (!i%3) {
            console.log("Fizz");
        } else if (!i%5) {
            console.log("Buzz");
        } else if (!i%3 && !i%5) {
            console.log("FizzBuzz");
        }
    }
}