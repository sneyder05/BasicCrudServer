import 'reflect-metadata';
import { BrokerOptions } from 'moleculer';
import { createConnection, useContainer } from 'typeorm';
import { Container } from 'typedi';
import config from 'config';
import { Any } from 'types';
import DBConnectionStarter from 'starters/DBConnection';
import MoleculerLoggerStarter from 'starters/MoleculerLogger';

useContainer(Container);

const brokerConfig: BrokerOptions = {
    namespace: 'moleculer-server',
    nodeID: 'gateway-server',
    logger: MoleculerLoggerStarter,
    logLevel: config.logger.level as Any,
    serializer: 'JSON',
    requestTimeout: 10 * 1000,
    async created() {
        await createConnection(DBConnectionStarter);
    }
};

export = brokerConfig;