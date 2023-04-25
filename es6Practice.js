//Create two arrays of numbers called numbers1 and numbers2
let numbers1 = [1, 2, 3, 4]
let numbers2 = [5, 6, 7, 8]

//Use the spread operator to create an array called numbers that combines the elements of numbers1 and numbers2
let numbers = [...numbers1, ...numbers2]
console.log(numbers)

//Define an arrow function called square that accepts a number as an argument and returns the square of the number
let square = number => number ** 2
console.log("This is arrow method: " + square(5));

/* 4. Use the map method to create a new array called squares that 
contains the squares of the numbers in the numbers array */
let squares = numbers.map( numbers => (numbers * numbers));
console.log(squares)

/* 5. Define an arrow function called isEven that accepts a number as 
an argument and returns true if the number is even, otherwise false */
let isEven = numbers => {
    if (numbers % 2 === 0) {
        return true
     }else (numbers !== 0)
        return false
}
console.log(isEven(4))
console.log(isEven(7))

/* 6. Use the filter method to create a new array called evenSquares
 that contains only the even squares from the squares array */
let evenSquares = squares.filter(square => square % 2 === 0)

console.log(evenSquares)

/* 7. Use destructuring assignment to extract the first and second elements of 
the evenSquares array into constants firstEvenSquare and secondEvenSquare */
let [firstEvenSquare, secondEvenSquare] = evenSquares

console.log(firstevenSquares);
console.log(secondEvenSquare);

/* 8. Use a template literal to log the original numbers array, the squares array, 
the evenSquares array, and the extracted even squares */
let nums = `${numbers} ${squares} ${evenSquares}`
console.log(nums)