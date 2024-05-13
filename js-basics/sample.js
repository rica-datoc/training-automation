// console.log("CONDITIONAL STATEMENTS...");
// if only statement
function ifOnly() {
    const char = String(document.getElementById("character").value);
    if ('aeiou'.includes(char) && char.length == 1) {
        document.getElementById("if-only-result").innerHTML = char + " is a vowel";
    }
}

// if-else statement
function ifElse() {
    const first = +document.getElementById("first").value;
    const second = +document.getElementById("second").value;

    if (first == 100 || second == 100 || first + second == 100) {
        document.getElementById("if-else-result").innerHTML = "True";
    } else {
        document.getElementById("if-else-result").innerHTML = "False";
    }
}

function ifElseIf() {
    const day = String(document.getElementById("day").value).trim();
    const result = document.getElementById('if-else-if-result');
    const weekday = ["monday", "tuesday", "wednesday", "thursday", "friday"]

    if (day.toLowerCase() === "saturday" || day.toLowerCase() === "sunday") {
        result.innerHTML = "Happy weekend! (^-^)";
    } else if (day.toLowerCase() === "friday") {
        result.innerHTML = "It's Friday, time to relax! \\^o^/";
    } else if (weekday.includes(day.toLowerCase())) {
        result.innerHTML = day + " is a weekday (;_;)";
    } else {
        result.innerHTML = `${day}? Did you make this up?`;
    }
}

// switch statement
function seasonDetector() {
    // Season detector using switch statement
    const month = String(document.getElementById("month").value).toLowerCase();

    let season;
    switch (month) {
        case 'december':
        case 'january':
        case 'february':
            season = 'Winter';
            break;
        case 'march':
        case 'april':
        case 'may':
            season = 'Spring';
            break;
        case 'june':
        case 'july':
        case 'august':
            season = 'Summer';
            break;
        case 'september':
        case 'october':
        case 'november':
            season = 'Autumn';
            break;
        default:
            season = 'Invalid month';
            break;
    }

    document.getElementById("season-result").innerHTML = `${month} is part of ${season}`;
    // console.log(`The season for ${month} is ${season}`);
}

// ternary operator
function isPalindrome() {
    // Input
    const input = String(document.querySelector('.ternary #word').value);
    const temp = input.toLowerCase().trim().replace(/[^a-zA-Z0-9]+/g, '');
    let isPalindrome = false;

    let reversedWord = temp.split('').reverse().join('');
    isPalindrome = temp === reversedWord;

    // Output
    document.getElementById("palindrome-result").innerHTML = `The word "${input}" is ${isPalindrome ? 'a palindrome' : 'not a palindrome'}`;
}

/** LOOPS */
function multiplicationTable() {
    // Input
    const num = +document.querySelector(".multiplication-table [name='num']").value;
    const table = document.querySelector("#multiplication-table-result");
    const name = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]

    // Process
    table.style.display = "block";

    let p = new Array(10);
    for (let i = 1; i <= 10; i++) {
        const result = num * i;
        p[i] = document.createElement("p");
        p[i].setAttribute("name", name[i - 1]);
        p[i].innerHTML = `${num} * ${i} = ${result}`;
        table.appendChild(p[i]);
    }
}


function getFactorial() {
    const input = Number(document.querySelector('.factorial [name="num"]').value);
    let number = input;
    let factorial = 1;

    do {
        if(number == 0){
            factorial = 1;
            break;
        }
        factorial = factorial * number;
        number--;
    } while (number > 1);

    document.getElementById("factorial-result").innerHTML = `The factorial of ${input} is ${factorial}`;
}

function reverseNumber() {
    const input = document.querySelector('.reverse-number [name="num"]')
    let number = Number(input.value);
    let reverse = 0;

    while (number > 0) {
        let digit = number % 10;
        reverse = reverse * 10 + digit;
        number = Math.floor(number / 10);
    }

    document.getElementById("reverse-number-result").innerHTML = `The reverse of ${input.value} is ${reverse}`;
}