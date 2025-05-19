# API Server – KoinX Backend Internship

## 📦 Features

- `/stats?coin=bitcoin` – returns latest price, market cap & 24h change.
- `/deviation?coin=bitcoin` – returns standard deviation of last 100 prices.
- Uses MongoDB and CoinGecko API.
- Subscribes to NATS event `crypto.update`.

## 🛠 Setup

```bash
cd api-server
npm install
