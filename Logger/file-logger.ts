const fs = require('fs');
const path = require('path');

function NativeFileWriteSync(filePath: string, buffer: string) {
    fs.writeFileSync(path.join(__dirname, filePath), buffer);
}