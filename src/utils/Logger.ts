import { Service } from 'typedi';
import { Logger, LoggerOptions } from 'pino';
import { Any } from 'types';

const Pino = require('pino');

@Service({
    global: true
})
export class AppLogger {
    private logger!: Logger;

    constructor () {
        const opts: LoggerOptions = {
            level: 'trace',
            prettyPrint: {
                colorize: true
            }
        };
        this.logger = Pino(opts);
    }

    public trace(msg: Any, ...args: Any[]): void {
        this.logger.trace(msg, ...args);
    }

    public debug(msg: Any, ...args: Any[]): void {
        this.logger.debug(msg, ...args);
    }

    public info(msg: Any, ...args: Any[]): void {
        this.logger.info(msg, ...args);
    }

    public warn(msg: Any, ...args: Any[]): void {
        this.logger.warn(msg, ...args);
    }

    public error(msg: Any, ...args: Any[]): void {
        this.logger.error(msg, ...args);
    }

    public fatal(msg: Any, ...args: Any[]): void {
        this.logger.fatal(msg, ...args);
    }
}