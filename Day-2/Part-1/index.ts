import * as fs from 'fs';
import * as path from 'path';

const readInput = (filename: string): string[] => {
    const filePath = path.join(__dirname, filename);
    const data = fs.readFileSync(filePath, 'utf-8');
    return data.trim().split('\n');
};

const isReportSafe = (levels: number[]): boolean => {
    let increasing = true;
    let decreasing = true;

    for (let i = 1; i < levels.length; i++) {
        const diff = levels[i] - levels[i - 1];
        // console.log("diff: ", diff);
        if (Math.abs(diff) < 1 || Math.abs(diff) > 3) return false;
        if (diff > 0) decreasing = false;
        if (diff < 0) increasing = false;
    }

    // console.log("Increasing: ", increasing);
    // console.log("Decreasing: ", decreasing);


    return increasing || decreasing;
};

const countSafeReports = (reports: string[]): number => {
    let safeCount = 0;

    reports.forEach(report => {
        const levels = report.split(' ').map(Number);
        // console.log("Levels: ", levels);
        if (isReportSafe(levels)) safeCount++;
    });

    return safeCount;
};

const reports = readInput('input.txt');
// console.log("Reports: ", reports);

const safeReportCount = countSafeReports(reports);
console.log(`Number of safe reports: ${safeReportCount}`);
