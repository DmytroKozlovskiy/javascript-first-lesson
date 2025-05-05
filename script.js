console.log("Hello from module script");

alert(prompt("What is your name"));

const currentYear = 2025;
const age = currentYear - prompt("Enter your birth year");
alert(`You are ${age} years old`);

const squareSide = prompt('What is the square side length?');
alert(`Square area is ${squareSide * 4}`);

const pi = 3.1415926535897932384626433832795;
const circleRadius = pi * prompt('what is the circle radius?') ** 2;
alert(`Circle area is ${circleRadius}`);

const distance = prompt('What is the distance between Odesa and Kyiv?');
const time = prompt('How many time you plan spend to?')
const speed = distance / time
alert(`Your speed is ${speed.toFixed(2)} km/h`);


// Правильні імена змінних для зберігання імені та прізвища
/* let firstName = "Dmytro";
let lastName = "Kozlovskyi";
let userFullName = `${firstName} ${lastName}`;
let profileName = `${firstName} ${lastName}`; */

// Неправильні імена змінних
// let 1stName = "Dmytro";        // починається з цифри — SyntaxError
// let user-name = "Dmytro";      // дефіс недозволений у JS-ідентифікаторах
// let full name = "Dmytro Koz";  // пробіл у назві змінної
// let @surname = "Kozlovskyi";   // починається з недозволеного символу
// let var = "value";             // `var` — зарезервоване слово


// Способи коментування коду:
// - однорядковий коментар
/* багаторядковий
 коментар */

/* 
Стилі написання змінних:
- camelCase
- PascalCase
- snake_case
- kebab-case 
*/

