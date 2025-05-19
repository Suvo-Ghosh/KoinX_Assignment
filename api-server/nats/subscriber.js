import { connect } from 'nats';
import { storeCryptoStats } from '../services/storeService.js';
import dotenv from 'dotenv';
dotenv.config();

export const subscribeToCryptoUpdate = async () => {
    try {
        const nc = await connect({ servers: process.env.NATS_URL });
        console.log('✅ Subscribed to NATS (api-server)');

        const sub = nc.subscribe('crypto.update');
        for await (const msg of sub) {
            const data = JSON.parse(msg.data);
            console.log('🔔 Received:', data);
            if (data.trigger === 'update') {
                await storeCryptoStats();
            }
        }
    } catch (err) {
        console.error('❌ NATS subscription failed:', err.message);
    }
};
