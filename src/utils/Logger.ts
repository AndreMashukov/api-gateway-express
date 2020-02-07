import * as path from 'path';
import * as winston from 'winston';

export class Logger {
  public static DEFAULT_SCOPE = 'app';

  private winstonLog: winston.Logger;
  private scope: string;

  private static parsePathToScope(filepath: string): string {
    if (filepath.indexOf(path.sep) >= 0) {
      filepath = filepath.replace(process.cwd(), '');
      filepath = filepath.replace(`${path.sep}src${path.sep}`, '');
      filepath = filepath.replace(`${path.sep}dist${path.sep}`, '');
      filepath = filepath.replace('.ts', '');
      filepath = filepath.replace('.js', '');
      filepath = filepath.replace(path.sep, ':');
    }
    return filepath;
  }

  constructor(scope?: string) {
    this.scope = Logger.parsePathToScope(scope ? scope : Logger.DEFAULT_SCOPE);

    this.winstonLog = winston.createLogger({
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp({
              format: 'YYYY-MM-DD hh:mm:ss A ZZ'
            }),
            winston.format.json()
          ),
          level: 'info'
        }),
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp({
              format: 'YYYY-MM-DD hh:mm:ss A ZZ'
            }),
            winston.format.json()
          ),
          level: 'debug'
        })
      ]
    });
  }

  public debug(message: any, ...args: any[]): void {
    this.log('debug', JSON.stringify(message), args);
  }

  public info(message: string, ...args: any[]): void {
    this.log('info', message, args);
  }

  public warn(message: string, ...args: any[]): void {
    this.log('warn', message, args);
  }

  public error(message: string, ...args: any[]): void {
    this.log('error', message, args);
  }

  private log(level: string, message: string, args: any[]): void {
    if (this.winstonLog) {
      this.winstonLog[level](`${this.formatScope()} ${message}`, args);
    }
  }

  private formatScope(): string {
    return `[${this.scope}]`;
  }
}
