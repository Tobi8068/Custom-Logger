import { LogLevel } from './logger.level';
import { NativeFileWriteSync } from './file-logger';

export class Logger {
    private savePath: string | undefined;

    constructor(savePath?: string) {
        this.savePath = savePath;
    }

    private getLogLevelColor(level: LogLevel): string {
        switch (level) {
            case LogLevel.Verbose:
                return '\x1b[37m'; // White
            case LogLevel.Info:
                return '\x1b[34m'; // Blue
            case LogLevel.Warning:
                return '\x1b[33m'; // Yellow
            case LogLevel.Error:
                return '\x1b[31m'; // Red
            default:
                return '\x1b[0m'; // Reset
        }
    }

    verbose(message: string) {
        this.log(LogLevel.Verbose, message);
    }

    info(message: string) {
        this.log(LogLevel.Info, message);
    }

    warning(message: string) {
        this.log(LogLevel.Warning, message);
    }

    error(message: string) {
        this.log(LogLevel.Error, message);
    }

    private log(level: LogLevel, message: string) {
        const logLevelColor = this.getLogLevelColor(level);
        const logMessage = `[${new Date().toLocaleString()}] ${logLevelColor}${level} ${message}\x1b[0m`;
        console.log(logMessage);
        if (this.savePath) {
            NativeFileWriteSync(this.savePath, logMessage + '\n');
        }
    }
}
