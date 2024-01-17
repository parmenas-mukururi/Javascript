// Question one
let randomNumber = Math.floor(Math.random()* 10 + 1)
while(true) {
    let guessedNumber = prompt('Enter a number between 1 and 10');
    if(randomNumber === guessedNumber) {
        alert('Good work')
    } else {
        alert('Not matched')
    } break;
}

// Question two
function totalMarks(){
 var totalMarks = 100
 var grade = ''
 var examFinal = prompt('Is it the final examination?')
 var marks = prompt('Enter marks')
 if (totalMarks >= 90 && examFinal){
    grade = 'A+'
 } else {
    grade = 'Not grade A+'
 }
 return grade
}
console.log(totalMarks())


// Question 3
let obj = {}
obj[1] = 'One'; 
obj['1'] = 'String One'; 
console.log(obj[1]); // String One
console.log(obj['1']); // String One
console.log(obj[1] === obj['1']); // true



