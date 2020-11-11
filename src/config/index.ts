import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';

const envFound = dotenv.config({ path: 'app.env' });
dotenvExpand(envFound);

if (envFound.error) {
    throw new Error('Could not find .env file');
}

export default {
    app: {
        target: process.env.TARGET || 'development',
        port: process.env.PORT || 3000,
        error: {
            origin: process.env.ERROR_ORIGIN || 'app'
        }
    },
    cacher: {
        isEnable: process.env.CACHER_ENABLE === 'true',
        ttl: process.env.CACHER_TTL || 30,
        host: process.env.CACHER_HOST || 'redis'
    },
    logger: {
        level: process.env.LOGGER_LEVEL || 'info'
    },
    mongo: {
        host: process.env.MONGO_HOST || 'localhost',
        user: process.env.MONGO_USER || '',
        pwd: process.env.MONGO_PWD || '',
        db: process.env.MONGO_DB || 'moleculerdb',
        port: process.env.MONGO_PORT ? parseInt(process.env.MONGO_PORT) : 27017
    }
};