import config from 'config';
import { MongoConnectionOptions } from 'typeorm/driver/mongodb/MongoConnectionOptions';

const DBConnectionStarter: MongoConnectionOptions = {
    type: 'mongodb',
    host: config.mongo.host,
    port: config.mongo.port,
    username: config.mongo.user,
    password: config.mongo.pwd,
    database: config.mongo.db,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    synchronize: true,
    entities: [ __dirname + '/../domain/models/*.ts' ]
};

export default DBConnectionStarter;