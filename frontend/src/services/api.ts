const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const analyzeSocialMedia = async (data: any) => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/chat`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        
        if (!response.ok) {
            throw new Error('Analysis request failed');
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error analyzing social media:', error);
        throw error;
    }
}; 