import { Service } from 'typedi';
import { classToPlain } from 'class-transformer';
import { Any } from 'types';

@Service()
export class ClassTx {
    /**
     * Convert a class to a plain object
     * @author fnavia
     * @since 1.0.0
     * @param {class} object The class that will be converted to plain object
     */
    public toPlain<T>(object: T): Any {
        return classToPlain(object);
    }
}