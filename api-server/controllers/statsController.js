import CryptoStat from '../models/CryptoStat.js';

export const getLatestStats = async (req, res) => {
    const { coin } = req.query;
    const latest = await CryptoStat.findOne({ coin }).sort({ createdAt: -1 });
    if (!latest) return res.status(404).json({ error: 'No data found' });

    res.json({
        price: latest.price,
        marketCap: latest.marketCap,
        "24hChange": latest.change24h
    });
};

export const getPriceDeviation = async (req, res) => {
    const { coin } = req.query;
    const records = await CryptoStat.find({ coin }).sort({ createdAt: -1 }).limit(100);
    if (records.length < 2) return res.status(400).json({ error: 'Not enough data' });

    const prices = records.map(r => r.price);
    const avg = prices.reduce((a, b) => a + b, 0) / prices.length;
    const variance = prices.reduce((sum, val) => sum + (val - avg) ** 2, 0) / prices.length;
    const stddev = Math.sqrt(variance);

    res.json({ deviation: +stddev.toFixed(2) });
};