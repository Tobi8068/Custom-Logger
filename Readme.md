
# Logger Class for TypeScript Web Application

## Overview

This Logger class is designed to provide functionalities for logging messages at different levels (verbose, info, warning, error) in a TypeScript web application. The goal is to have a logger that is easy to use and can be imported into many other components.

## Features

- **Logging at Different Levels**: The logger allows developers to log messages at different levels, including verbose, info, warning, and error.
- **Easy to Use**: The logger is designed to be easy to use, with a simple interface for logging messages.
- **Serializable Data Types**: The logger supports logging of strings and other data types that are serializable to strings.
- **Console and File Logging**: The logger can log messages to the console and also write them to a log file for backup and archiving.

## Design Patterns

- **Modular Design**: The logger is designed to be modular, with separate components for logging and file I/O.
- **Interface-Based Design**: The logger uses interfaces to define the logging functionality, making it easy to extend or modify.

## Implementation

### Logger Class

The `Logger` class is the main component of the logger. It provides methods for logging messages at different levels.

### File Logging Module

The `file-logger` module provides a function `NativeFileWriteSync` for writing logs to files. This function is used to simulate file I/O operations.

## Usage

To use the logger, simply import the `Logger` class and create an instance. You can optionally provide a file path to save the logs.

```typescript
import { Logger } from './logger';

const logger = new Logger('logs/my-log.txt');
logger.verbose('This is a verbose message');
logger.info('This is an info message');
logger.warning('This is a warning message');
logger.error('This is an error message');
```

If the file path does not exist, the necessary directories will be created automatically.

## Documentation

### Sample Usage

```typescript
import { Logger } from './logger';

const logger = new Logger('logs/my-log.txt');
logger.verbose('This is a verbose message');
logger.info('This is an info message');
logger.warning('This is a warning message');
logger.error('This is an error message');
```

### Design Patterns Used

- **Modular Design**: The logger is designed to be modular, with separate components for logging and file I/O.
- **Interface-Based Design**: The logger uses interfaces to define the logging functionality, making it easy to extend or modify.

## License

This project is licensed under the MIT License.

## Author

Tobi8068

## Acknowledgments

This project was inspired by the Crypto Mattock Limited Backend Developer Exam.