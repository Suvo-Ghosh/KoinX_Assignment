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
        default: Date.now,
        expires: 60 * 60 * 24 * 7   // Automatically delete after 7 days(do this because of free tier)
    }
});

export default mongoose.model('CryptoStat', cryptoStatSchema);
