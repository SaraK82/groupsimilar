
const carInfo =
[
    "duel",
    "dule",
    "edlu",
    "speed",
    "spede",
    "deul",
    "cars",
    "racs",
    "acrs",
    "shape",
    "shpea",
    ]

let result = [];
 let userInput = prompt("Enter the word");
function check(userInput){
    for(let el of carInfo){
        //console.log(el)
        if(new Set (el).size === new Set(el + userInput).size){
            result.push(el)
        }
    }
}
check(userInput) 
console.log(result)
