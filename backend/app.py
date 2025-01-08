from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

BASE_API_URL = "https://api.langflow.astra.datastax.com"
LANGFLOW_ID = "5e42b37a-b5a6-48ea-a193-93e609f47e56"
FLOW_ID = "edbcfc45-a3fd-41ae-8fd9-1a6eccf14f73"
APPLICATION_TOKEN = "AstraCS:pqiLdkmcwqoRkSqalMPLUsCu:b2c53c0f0238b23d75ee4295da77a26f1bd3e5a617623bb736c8055ee0ad9d4e"

TWEAKS = {
    "Agent-YBzSb": {},
    "ChatOutput-3fPw4": {},
    "AstraDBToolComponent-KfxZB": {},
    "Prompt-HjCsY": {},
    "ChatInput-Soob9": {},
    "GroqModel-SyMHq": {},
    "Prompt-gyG17": {},
    "ParseData-0oS6M": {}
}

@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.json
    message = data.get('message')
    
    api_url = f"{BASE_API_URL}/lf/{LANGFLOW_ID}/api/v1/run/{FLOW_ID}"
    
    payload = {
        "input_value": message,
        "output_type": "chat",
        "input_type": "chat",
        "tweaks": TWEAKS
    }
    
    headers = {
        "Authorization": f"Bearer {APPLICATION_TOKEN}",
        "Content-Type": "application/json"
    }
    
    try:
        response = requests.post(api_url, json=payload, headers=headers)
        print(response.json())
        return jsonify(response.json())
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000) 