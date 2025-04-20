  export async function sendToGPTApi(userMessage) {
    const apiKey = process.env.REACT_APP_CHAT_GPT_API_KEY;
  
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo", 
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: userMessage }
        ],
        temperature: 0.7
      })
    });
  
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(data.error?.message || "Error with OpenAI API");
    }
  
    return data.choices[0].message.content;
  }
  