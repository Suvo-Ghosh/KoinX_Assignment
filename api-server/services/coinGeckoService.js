import axios from 'axios';

export const fetchCryptoStats = async () => {
    const { data } = await axios.get(
        'https://api.coingecko.com/api/v3/simple/price',
        {
            params: {
                ids: 'bitcoin,ethereum,matic-network',
                vs_currencies: 'usd',
                include_market_cap: 'true',
                include_24hr_change: 'true'
            }
        }
    );
    return data;
};
