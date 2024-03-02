import fs from 'fs/promises';
import path from 'path';

// List all files present in the given directory
export async function listDirectoryContents(directory) {
    try {
        let files = await fs.readdir(directory);
        for (const file of files) {
            let filePath = path.resolve(directory, file);
            let fileDetails = await fs.lstat(filePath);
            if (fileDetails.isDirectory()) {
                console.log('Directory: ' + filePath);
            } else {
                console.log('File: ' + filePath);
            }
        }
    } catch (err) {
        console.error('Error: ' + err);
    }
}

// Make a new directory 
export async function makeDir() {
    try {
        await fs.mkdir('newDir', { recursive: true });
        console.log('Directory created: newDir');
    } catch (err) {
        console.error('Error creating directory: ' + err);
    }
}

// Read file content 
export async function fileData() {
    try {
        let data = await fs.readFile('./index.html', 'utf-8');
        console.log(data);
    } catch (err) {
        console.error('Error reading file: ' + err);
    }
}

// Write to file 
export async function writeToFile() {
    try {
        await fs.writeFile('sample.txt', 'Hello Team');
        console.log('File created: sample.txt');
    } catch (err) {
        console.error('Error writing to file: ' + err);
    }
}
