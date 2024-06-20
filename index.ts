const http = require('http');
const app = require('express');
const { LoggerClass } = require('./Logger/logger.class');

const PORT = 8080;

const LoggerNote = new LoggerClass();

LoggerNote.verbose("Verbose");
LoggerNote.info("Information");
LoggerNote.warning("Warning");
LoggerNote.error("Error");

http.createServer(app).listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});