import { Application } from './app';

/**
 * Entrypoint for bootstrapping and starting the application.
 * Might configure aspects like logging, telemetry,
 *  memory leak observation or even orchestration before.
 * This is about to come later!
 */

Application.createApplication().then(() => {
    console.log('The application was started! Kill it using Ctrl + C');
});
