import React, { useEffect } from 'react';
import './App.css';

const App = () => {
  useEffect(() => {
    // Dynamically load the Watson Assistant Web Chat script
    const script = document.createElement('script');
    script.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/latest/WatsonAssistantChatEntry.js";
    script.async = true;
    script.onload = () => {
      // Initialize Watson Assistant after the script is loaded
      window.watsonAssistantChatOptions = {
        integrationID: 'XXXXX',  // The ID of your Watson Assistant Integration
        region: 'eu-de',                // Your region, e.g., 'us-south', 'eu-gb', etc.
        serviceInstanceID: 'XXXXX', // Your Watson Assistant service instance ID
        onLoad: (instance) => {
          instance.render();
        }
      };
      window.WatsonAssistantChat ? window.WatsonAssistantChat.render() : console.error('Watson Assistant failed to load.');
    };

    document.body.appendChild(script);
  }, []);

  return (
    <div className="App">
      {/* The Watson Assistant chat UI will appear automatically */}
    </div>
  );
};

export default App;
