import mongoose from 'mongoose';

const cryptoStatSchema = new mongoose.Schema({
    coin: {
        type: String,
        required: true
    },
    price: Number,
    marketCap: Number,
    change24h: Number,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('CryptoStat', cryptoStatSchema);
