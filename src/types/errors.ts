import { Errors, GenericObject } from 'moleculer';
import HttpCode from 'http-status-codes';

enum ErrorType {
    MongoDuplicateKeyIndex = 'DUPLICATE_KEY_INDEX',
    CharacterNotFound = 'CHARACTER_NOT_FOUND'
}

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

export class MongoDuplicateKeyIndex extends Errors.MoleculerError {
    constructor(data?: GenericObject) {
        super(
            'Duplicate entry: Unable to save the record',
            HttpCode.BAD_GATEWAY,
            ErrorType.MongoDuplicateKeyIndex,
            data
        );
    }
}

export class CharacterNotFoundError extends Errors.MoleculerError {
    constructor(data?: GenericObject) {
        super('Character not found', HttpCode.NOT_FOUND, ErrorType.CharacterNotFound, data);
    }
}