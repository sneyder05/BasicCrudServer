import { Service } from 'typedi';
import { ObjectID } from 'typeorm';

const mongoose = require('mongoose');

@Service({
    global: true
})
export class Utilities {
    public toObjectId(id: string): ObjectID {
        return mongoose.Types.ObjectId(id);
    }
}