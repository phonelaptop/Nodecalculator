

const additive1 = parseInt(process.argv[2]);
const additive2 = parseInt(process.argv[4]);
const operator = process.argv[3];

if (operator === "plus") {
    console.log(additive1 + additive2)
} else if (operator === "minus") {
    console.log(additive1 - additive2)
} else if (operator === "divide") {
    console.log(additive1 / additive2)
} else if (operator === "multiply") {
    console.log(additive1 * additive2)
} else {
    console.log("what are you doing?")
}
