import { processInput } from "./processInput";

const { array1, array2 } = processInput();

array1.sort((a, b) => a - b);
array2.sort((a, b) => a - b);

let totalDistance = 0;

for (let i = 0; i < array1.length; i++) {
    const distance = Math.abs(array1[i] - array2[i]);
    totalDistance += distance;
}

console.log("Total Distance: ", totalDistance);