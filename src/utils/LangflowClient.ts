export const FLOW_ID = 'Simple Agent.json';

export const DEFAULT_TWEAKS = {
    "Agent-YBzSb": {},
    "ChatOutput-3fPw4": {},
    "AstraDBToolComponent-KfxZB": {},
    "Prompt-HjCsY": {},
    "ChatInput-Soob9": {},
    "GroqModel-SyMHq": {},
    "Prompt-gyG17": {},
    "ParseData-0oS6M": {}
};

export class LangflowClient {
    private baseUrl: string;

    constructor(baseUrl = '/api') {
        this.baseUrl = baseUrl;
    }

    async runFlow({ message, endpoint, tweaks }: {
        message: string;
        endpoint: string;
        tweaks: any;
    }) {
        const response = await fetch(`${this.baseUrl}/analyze`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message,
                flow_id: endpoint,
                tweaks
            })
        });

        if (!response.ok) {
            throw new Error('Failed to process request');
        }

        return response.json();
    }
} 