import { Service as MolecularService, GenericObject, Errors, Context } from 'moleculer';
import { ServerResponse, IncomingMessage } from 'http';
import config from 'config';

const { Service } = require('moleculer-decorators');
const ApiGateway = require('moleculer-web');

@Service({
    name: 'api',
    mixins: [ ApiGateway ],
    settings: {
        port: config.app.port,
        ip: '0.0.0.0'
    },
    bodyParsers: {
        json: {
            strict: true,
            limit: '1MB'
        },
        urlencoded: {
            extended: true,
            limit: '1MB'
        }
    }
})
export default class ApiEntry extends MolecularService {
    public settings = {
        use: [],
        cors: {
            origin: '*',
            methods: [ 'GET', 'OPTIONS', 'POST', 'PUT', 'DELETE' ],
            credentials: false,
            allowedHeaders: '*',
            exposedHeaders: '*',
            maxAge: 3600
        },
        routes: [
            {
                path: '/api',
                whitelist: [
                    'v1.character.*'
                ],
                autoAliases: true,
                logging: true,
                onBeforeCall: this.onBeforeCall
            }
        ],
        onError: this.onError
    };

    private onError(req: IncomingMessage, res: ServerResponse, err: Errors.MoleculerError): void {
        if (config.app.target === 'production') {
            this.logger.info('Error data', err.data);
        }

        const error = {
            success: false,
            name: err.name,
            message: err.message,
            code: err.code,
            type: err.type,
            data: process.env.TARGET !== 'production' ? err.data : []
        };

        res.setHeader('Content-Type', 'application/json');
        res.writeHead(err.code);
        res.end(JSON.stringify(error));
    }
}