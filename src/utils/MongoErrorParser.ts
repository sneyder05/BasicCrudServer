import { Any } from 'types';

export class MongoErrorParser {
    public name!: string;
    public code!: number;

    public static isParseable(error: Any, includingKeys?: string[]): boolean {
        const errorKeys = Object.keys(error);

        if (!includingKeys) {
            includingKeys = [ 'name', 'code' ];
        }

        return includingKeys.every(key => errorKeys.includes(key));
    }
}