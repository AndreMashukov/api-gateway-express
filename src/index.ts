import { Application } from './app';
import { Logger } from './utils/Logger';

/**
 * Entrypoint for bootstrapping and starting the application.
 * Might configure aspects like logging, telemetry,
 *  memory leak observation or even orchestration before.
 * This is about to come later!
 */

const logger = new Logger();

Application.createApplication().then(() => {
    logger.info('The application was started! Kill it using Ctrl + C');
});
