import express from 'express';
import statsRoutes from './routes/statsRoutes.js';
import { subscribeToCryptoUpdate } from './nats/subscriber.js';
import dotenv from 'dotenv';
import connectDB from './configs/mongoConfig.js';
dotenv.config();

const app = express();
app.use(express.json());
app.use('/', statsRoutes);

app.get('/', (req, res) => res.send('Hello World!'));

const PORT = process.env.PORT || 5000;
connectDB()
    .then(() => {
        console.log('MongoDB connected');
        app.listen(PORT, () => {
            console.log(`API Server running on port ${PORT}`);
        });
        subscribeToCryptoUpdate(); // Subscribe to NATS
    })
    .catch(err => console.error('MongoDB connection error:', err));

