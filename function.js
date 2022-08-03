// Process 1

{
    function myFunction(x, y) {
        return x + y;
    }
    console.log(myFunction(10, 15));
}

// Process 2

{
    const myFunction = function (x, y) {
        return x + y;
    }
    console.log(myFunction(5, 4));
}

// Process 3

{
    const myFunction = (x, y) => {
        return x + y;
    }
    console.log(myFunction(15, 20));
}

// Process 4

{
    const myFunction = (x, y) => x + y;
    console.log(myFunction(50, 10));
}