import { inputToStringArray } from "../utils.js";

const splitInput = inputToStringArray('1/input.txt');
const left = [];
const right = [];

for (let i = 0; i < splitInput.length; i++) {
    const values = splitInput[i].split('   ');
    left.push(values[0]);
    right.push(values[1]);
}

left.sort()
right.sort()

let sum = 0;

for (let i = 0; i < left.length; i++) {
    sum += Math.abs(left[i] - right[i]);
}

console.log(sum)