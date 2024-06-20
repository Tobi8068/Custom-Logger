const fs = require('fs');
const path = require('path');

export function NativeFileWriteSync(filePath: string, buffer: string) {
    try {
        // Create the directory if it doesn't exist
        const dirPath = path.dirname(filePath);
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
        }

        // Write the log to the file
        fs.writeFileSync(filePath, buffer, { flag: 'a' });
    } catch (err) {
        console.error(`Error writing log to file: ${err}`);
    }
}