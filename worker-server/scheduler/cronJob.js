import cron from 'node-cron';
import { publishUpdate } from '../nats/publisher.js';

cron.schedule('*/15 * * * *', async () => {
    console.log('⏰ Running job at', new Date().toISOString());
    await publishUpdate();
});
