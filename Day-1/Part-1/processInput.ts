import * as fs from 'fs';
import * as path from 'path';

export const processInput = (): {array1: number[], array2: number[]} => {
    const filePath = path.join(__dirname, 'input.txt'); 
    const input = fs.readFileSync(filePath, 'utf-8');

    const lines = input.trim().split('\n');

    const array1: number[] = [];
    const array2: number[] = [];

    lines.forEach(line => {
        const [num1, num2] = line.trim().split(/\s+/).map(Number);
        array1.push(num1);
        array2.push(num2);
    });

    return { array1, array2 };
}



