import express from 'express';
import dotenv from 'dotenv';
import { publishUpdate } from './nats/publisher.js';
import './scheduler/cronJob.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send('🚀 Worker server is running...');
});

app.listen(PORT, () => {
    console.log(`🚀 Worker server running on port ${PORT}`);
});

