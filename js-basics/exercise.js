
function numberOfVowels() {
    // Input
    const statement = String(document.getElementById("statement").value);
    // sample input: Hello, World!

    // Process
    /** 
     * Must implement both loop and conditional statements
     */


    // Output
    document.getElementById("number-of-vowels-result").innerHTML = `There are total of ${count} vowels in "${statement}"`;
    // sample output: There are total of 3 vowels in "Hello, World!"
}

function getLargest(){
    // Input
    const input = document.querySelector('.largest-number [name="numbers"]').value;
    // sample input: 4,6,2
    const numbers = input.split(',').map(Number);
    // numbers = [4, 6, 2]

    // Process
    /** REPLACE THIS COMMENT BLOCK WITH YOUR SOLUTION
     * Must implement both loop and conditional statements
     */

    // Output
    document.getElementById("largest-number-result").innerHTML = `The largest number in [${numbers}] is ${largest}`;
    // sample output: The largest number in [4,6,2] is 6
}

function getProductSign(){
    // Input
    const input = document.querySelector('.sign-of-product [name="numbers"]').value;
    // sample input: '-9, 5, 7'
    const numbers = input.split(',').map(Number);
    // numbers = [-9, 5, 7]

    // Process
    /** REPLACE THIS COMMENT BLOCK WITH YOUR SOLUTION
     * Must implement both loop and conditional statements
     */

    // Output
    document.getElementById("sign-of-product-result").innerHTML = `The product of [${numbers}] is ${productSign}`;
    // sample output: The product of [-9, 5, 7] is negative
}

function printOdd(){
    // Input
    const input = document.querySelector('.print-odd [name="numbers"]').value;
    // sample input: 1,2,3,4,5
    const numbers = input.split(',').map(Number);
    // numbers = [1, 2, 3, 4, 5]

    // Process
    /** REPLACE THIS COMMENT BLOCK WITH YOUR SOLUTION
     * Must implement both loop and conditional statements
     */

    // Output
    document.getElementById("print-odd-result").innerHTML = `The odd numbers in [${numbers}] are ${oddNumbers}`;
    // sample output: The odd numbers in [1,2,3,4,5] are 1,3,5

}

function printEven(){
    // Input
    const input = document.querySelector('.print-even [name="numbers"]').value;
    // sample input: 1,2,3,4,5
    const numbers = input.split(',').map(Number);
    // numbers = [1, 2, 3, 4, 5]

    // Process
    /** REPLACE THIS COMMENT BLOCK WITH YOUR SOLUTION
     * Must implement both loop and conditional statements
     */

    // Output
    document.getElementById("print-even-result").innerHTML = `The even numbers in [${numbers}] are ${evenNumbers}`;
    // sample output: The even numbers in [1,2,3,4,5] are 2,4
}

function fizzBuzz(){
    // Input
    const input = document.querySelector('.fizz-buzz [name="numbers"]').value;
    // sample input: 1,2,3,4,5,11,12,15
    const numbers = input.split(',').map(Number);
    // numbers = [1, 2, 3, 4, 5, 11, 12, 15]

    // Process
    /** REPLACE THIS COMMENT BLOCK WITH YOUR SOLUTION
     * Must implement both loop and conditional statements
     */

    // Output
    document.getElementById("fizz-buzz-result").innerHTML = `The FizzBuzz of [${numbers}] is ${fizzBuzzNumbers}`;
    // sample output: The FizzBuzz of [1,2,3,4,5,11,12,15] is 1,2,Fizz,4,Buzz,11,Fizz,FizzBuzz
}

function removeDuplicates(){
    // Input
    const input = document.querySelector('.remove-duplicates [name="numbers"]').value;
    // sample input: 1,2,2,3,4,5,5
    const numbers = input.split(',').map(Number);
    // numbers = [1, 2, 2, 3, 4, 5, 5]

    // Process
    /** REPLACE THIS COMMENT BLOCK WITH YOUR SOLUTION
     * Must implement both loop and conditional statements
     */

    // Output
    document.getElementById("remove-duplicates-result").innerHTML = `The unique numbers in [${numbers}] are ${uniqueNumbers}`;
    // sample output: The unique numbers in [1,2,2,3,4,5,5] are 1,2,3,4,5
}