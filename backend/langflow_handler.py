from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from langflow.load import run_flow_from_json
import os
import json

app = FastAPI()

# Load the flow JSON
with open("flows/engagement_agent.json", "r") as f:
    FLOW_JSON = json.load(f)

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

class MessageRequest(BaseModel):
    message: str
    flow_id: str
    tweaks: dict = TWEAKS

@app.post("/api/analyze")
async def analyze_message(request: MessageRequest):
    try:
        # Get the message from the user's input
        user_message = request.message
        
        # Run the flow with the user's message
        result = run_flow_from_json(
            flow=FLOW_JSON,  # Pass the loaded JSON directly
            input_value=user_message,
            session_id="",
            fallback_to_env_vars=True,
            tweaks=request.tweaks
        )
        
        # Extract the relevant response from the result
        # Adjust this based on your flow's output structure
        response = {
            "message": result.get("output", "No response generated"),
            "status": "success"
        }
        
        return response
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e)) 