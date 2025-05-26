import dotenv from 'dotenv';
import { publishUpdate } from './nats/publisher.js';
import './scheduler/cronJob.js';
import http from 'http';

dotenv.config();

// Dummy server just to keep Render happy
const PORT = process.env.PORT || 3001;
http.createServer((req, res) => {
    res.end('Worker server is running...');
}).listen(PORT, () => {
    console.log(`🚀 Worker server running on port ${PORT}`);
});
