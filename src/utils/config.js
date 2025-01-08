const config = {
    LANGFLOW_TOKEN: process.env.REACT_APP_LANGFLOW_TOKEN,
    BASE_API_URL: "https://api.langflow.astra.datastax.com",
    LANGFLOW_ID: "5e42b37a-b5a6-48ea-a193-93e609f47e56",
    FLOW_ID: "edbcfc45-a3fd-41ae-8fd9-1a6eccf14f73"
};

// Log configuration on load (but not the token)
console.log('API Configuration:', {
    ...config,
    LANGFLOW_TOKEN: config.LANGFLOW_TOKEN ? '✓ Token present' : '✗ Token missing'
});

export default config; 