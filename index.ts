const http = require('http');
const app = require('express');
const { Logger } = require('./Logger/logger.class');

const PORT = 8080;

const MyLog = new Logger("./logs/my-log.txt");

MyLog.verbose("Verbose");
MyLog.info("Information");
MyLog.warning("Warning");
MyLog.error("Error");

http.createServer(app).listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});