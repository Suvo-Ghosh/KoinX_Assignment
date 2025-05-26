# API Server – KoinX Backend Assignment

## 📦 Features

- `/stats?coin=bitcoin` – returns latest price, market cap & 24h change.
- `/deviation?coin=bitcoin` – returns standard deviation of last 100 prices.
- Uses MongoDB and CoinGecko API.
- Subscribes to NATS event `crypto.update`.

## 🛠 Setup
### Prerequisites

- Node.js and npm installed
- MongoDB instance running
- NATS server running

### Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/Suvo-Ghosh/KoinX_Assignment
    ```

2. **Navigate to the `api-server` directory**:

    ```bash
    cd api-server
    ```

3. **Install the dependencies**:

    ```bash
    npm install
    ```

4. **Set up environment variables**:
   
   Create a `.env` file in the root of the `api-server` directory and add the necessary environment variables:

    ```
    MONGO_URI=<your-mongodb-uri>
    PORT=5000
    NATS_URL=<your-nats-url>
    ```

5. **Start the server**:

    For development:

    ```bash
    npm run dev
    ```

    For production:

    ```bash
    npm start
    ```

### Usage

- Access the API endpoints to get the required data:
  - `/stats?coin=bitcoin`
  - `/deviation?coin=bitcoin`

### Additional Information

- Ensure MongoDB and NATS server are running and accessible.
- The API server listens for `crypto.update` events from the NATS server to update data.

## Live URL
- The API is live at : https://koinx-api-server-6njm.onrender.com
