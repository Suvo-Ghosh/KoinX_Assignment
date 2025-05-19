import { connect } from 'nats';

let nc;

export const publishUpdate = async () => {
    try {
        if (!nc) {
            nc = await connect({ servers: process.env.NATS_URL });
            console.log('✅ Connected to NATS (worker)');
        }

        nc.publish('crypto.update', JSON.stringify({ trigger: 'update' }));
        console.log('📤 Published crypto.update');
    } catch (err) {
        console.error('❌ Failed to publish:', err.message);
    }
};
