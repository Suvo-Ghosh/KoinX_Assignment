import CryptoStat from '../models/CryptoStat.js';
import { fetchCryptoStats } from '../services/coinGeckoService.js';
import { calculateStdDeviation } from '../utils/stdDeviation.js';

export const storeCryptoStats = async () => {
    const stats = await fetchCryptoStats();
    const entries = Object.entries(stats).map(([coin, info]) => ({
        coin,
        price: info.usd,
        marketCap: info.usd_market_cap,
        change24h: info.usd_24h_change
    }));

    await CryptoStat.insertMany(entries);
};

export const getLatestStats = async (req, res) => {
    const { coin } = req.query;
    const stat = await CryptoStat.findOne({ coin }).sort({ createdAt: -1 });
    if (!stat) return res.status(404).json({ error: 'Coin data not found' });

    res.json({
        price: stat.price,
        marketCap: stat.marketCap,
        "24hChange": stat.change24h
    });
};

export const getPriceDeviation = async (req, res) => {
    const { coin } = req.query;
    const prices = await CryptoStat.find({ coin }).sort({ createdAt: -1 }).limit(100);
    const priceArray = prices.map(p => p.price);
    const deviation = calculateStdDeviation(priceArray);

    res.json({ deviation: Number(deviation.toFixed(2)) });
};
