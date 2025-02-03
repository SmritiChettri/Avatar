import React, { useState } from 'react';
import { Avatar } from './components/Avatar';
import { Chat } from './components/Chat';
import { Bot } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

function App() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your hospital assistant. How can I help you today?",
      sender: 'assistant',
      timestamp: new Date(),
    },
  ]);

  const handleSendMessage = async (text: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    
    // Simulate processing
    setIsProcessing(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // Simulate assistant response
    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: "I'm a frontend placeholder. The actual LLM integration will be implemented when deployed to a full server environment.",
      sender: 'assistant',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, assistantMessage]);
    setIsProcessing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Bot className="w-8 h-8 text-blue-600" />
              <h1 className="ml-2 text-xl font-semibold text-gray-900">Hospital Assistant</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Avatar */}
          <div className="flex flex-col items-center justify-start p-8 bg-white rounded-lg shadow-lg">
            <Avatar
              isSpeaking={isSpeaking}
              isListening={isListening}
              toggleSpeech={() => setIsSpeaking(!isSpeaking)}
              toggleListening={() => setIsListening(!isListening)}
              onCustomize={() => alert('Avatar customization will be implemented with backend integration')}
            />
            <div className="mt-6 text-center">
              <h2 className="text-xl font-semibold text-gray-900">Your Virtual Assistant</h2>
              <p className="mt-2 text-gray-600">I'm here to help answer your questions and provide assistance</p>
            </div>
          </div>

          {/* Right Column - Chat */}
          <div>
            <Chat
              messages={messages}
              onSendMessage={handleSendMessage}
              isProcessing={isProcessing}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;