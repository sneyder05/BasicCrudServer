import { Errors } from 'moleculer';
import HttpCode from 'http-status-codes';

export class AppError {
    public static get(error: string | Error | Errors.MoleculerError): Errors.MoleculerError {
        if (typeof error === 'string') {
            return new Errors.MoleculerError(error, HttpCode.INTERNAL_SERVER_ERROR, 'APP_ERROR');
        } else if (error instanceof Errors.MoleculerError) {
            return error;
        } else if (error instanceof Error) {
            return new Errors.MoleculerError(error.message, HttpCode.INTERNAL_SERVER_ERROR, 'APP_ERROR');
        } else {
            console.error('Unable to get exception from error ->', error);
        }

        return new Errors.MoleculerError('Unknow error', HttpCode.INTERNAL_SERVER_ERROR, 'APP_ERROR');
    }
}