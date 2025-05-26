# Worker Server – KoinX Backend Assignment

## 📦 Features

- Background job every 15 minutes using `node-cron`
- Publishes `crypto.update` event to NATS server

## 🛠 Setup 
### Prerequisites

- Node.js and npm installed
- NATS server running

### Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/Suvo-Ghosh/KoinX_Assignment
    ```

2. **Navigate to the `worker-server` directory**:

    ```bash
    cd worker-server
    ```

3. **Install the dependencies**:

    ```bash
    npm install
    ```

4. **Set up environment variables**:

   Create a `.env` file in the root of the `worker-server` directory and add the necessary environment variables:

    ```
    NATS_URL=<your-nats-url>
    ```

5. **Start the worker server**:

    For development:

    ```bash
    npm run dev
    ```

    For production:

    ```bash
    npm start
    ```

## Live URL
- The API is live at : https://koinx-api-server-6njm.onrender.com


