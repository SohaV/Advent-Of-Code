import { processInput } from "../Part-1/processInput";

const { array1, array2 } = processInput();

let similarityScore = 0;

for (let i = 0; i < array1.length; i++) {
    const count = array2.filter((num) => array1[i] === num).length;
    similarityScore += array1[i] * count;
}

console.log("Similarity score: ", similarityScore);