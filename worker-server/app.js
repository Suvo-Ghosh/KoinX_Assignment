import dotenv from 'dotenv';
import { publishUpdate } from './nats/publisher.js';
import './scheduler/cronJob.js';

dotenv.config();
console.log('🚀 Worker server running...');
