import { app } from './app';
import { configDevelopment } from './config/development';
import { configProduction } from './config/production';
import { logger } from './modules/Logger';

let config;
switch(process.env.NODE_ENV) {
    case 'production':
        config = configProduction;
        break;
    default:
        config = configDevelopment;
}

export const server = app.listen(config.port, () => logger.info(`Server started on http://${config.host}:${config.port}`));
