import express from 'express';
import statsRoutes from './routes/statsRoutes.js';
import { startNATS } from './nats/subscriber.js';
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
        // startNATS();
        app.listen(PORT, () => {
            console.log(`API Server running on port ${PORT}`);
        });
    })
    .catch(console.error);

export default app;
