import { connect } from 'nats';
import { storeCryptoStats } from '../controllers/statsController.js';

export const startNATS = async () => {
    const nc = await connect({ servers: process.env.NATS_URL });
    const sub = nc.subscribe('crypto.update');

    for await (const msg of sub) {
        console.log('Received update event');
        await storeCryptoStats();
    }
};
