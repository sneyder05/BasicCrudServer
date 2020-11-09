import { GenericObject } from 'moleculer';
import { Service } from 'typedi';
import { ObjectID } from 'typeorm';
import { Any } from 'types';

const mongoose = require('mongoose');
const lodashFlattenDeep = require('lodash/flattenDeep');

@Service({
    global: true
})
export class Utilities {
    public toBase64(data: string): string {
        return Buffer.from(data).toString('base64');
    }

    /**
     * Replace a text using key-value format object
     * The text must contain each key in the following format {myKeyName}
     * @author fnavia
     * @since 1.0.0
     * @param {string} text The text where the changes will be applied
     * @param {object} replace A key-value format object to replace each key with each value
     * @returns {string} The new string with the applied changes
     */
    public replaceOn(text: string, replace: GenericObject): string {
        const keys = Object.keys(replace);

        keys.forEach(key => {
            text = text.replace(`{${key}}`, replace[key])
        });

        return text;
    }

    public getBearerAuth(token: string): string {
        return `Bearer ${token}`;
    }

    public getBasicAuth(token: string): string {
        return `Basic ${token}`;
    }

    /**
     * Transform a bidimensional array to a flatten collection
     * @author fnavia
     * @since 1.0.0
     * @param {array} array An array with a bidimensional collection of other objects
     */
    public flattenDeep(array: Any[]): Any[] {
        return lodashFlattenDeep(array);
    }

    public toObjectId(id: string): ObjectID {
        return mongoose.Types.ObjectId(id);
    }
}