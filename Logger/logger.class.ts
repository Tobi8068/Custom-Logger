import { Logger } from './logger';

export class LoggerClass implements Logger {
  verbose(message: string) {
    console.log(`[Verbose] >> ${message}`);
  }

  info(message: string) {
    console.log(`   [Info] >> ${message}`);
  }

  warning(message: string) {
    console.log(`[Warning] >> ${message}`);
  }

  error(message: string) {
    console.log(`  [Error] >> ${message}`);
  }
}