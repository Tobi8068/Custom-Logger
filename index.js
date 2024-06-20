const http = require('http');
const app = require('express');

const PORT = 8080;

http.createServer(app).listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});