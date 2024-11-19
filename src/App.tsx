import React, { useState, useRef, useEffect } from 'react';
import { Message, Model, ChatSession } from './types/chat';
import { ChatMessage } from './components/ChatMessage';
import { ModelSelector } from './components/ModelSelector';
import { ChatInput } from './components/ChatInput';
import { Menu } from 'lucide-react';

function App() {
  const [session, setSession] = useState<ChatSession>({
    id: crypto.randomUUID(),
    messages: [],
    model: 'groq',
    createdAt: Date.now(),
  });
  const [isTyping, setIsTyping] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [session.messages]);

  const handleSendMessage = async (content: string) => {
    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: 'user',
      content,
      timestamp: Date.now(),
    };

    setSession((prev) => ({
      ...prev,
      messages: [...prev.messages, userMessage],
    }));

    setIsTyping(true);

    try {
      // Simulate API call with timeout
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const assistantMessage: Message = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: `I'm using the ${session.model} model. This is a simulated response to: "${content}"`,
        timestamp: Date.now(),
      };

      setSession((prev) => ({
        ...prev,
        messages: [...prev.messages, assistantMessage],
      }));
    } catch (error) {
      console.error('Failed to get response:', error);
    } finally {
      setIsTyping(false);
    }
  };

  const handleModelChange = (model: Model) => {
    setSession((prev) => ({ ...prev, model }));
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile sidebar toggle */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed lg:relative lg:translate-x-0 z-40 w-64 h-full bg-white shadow-lg transition-transform duration-300 ease-in-out`}
      >
        <ModelSelector
          selectedModel={session.model}
          onModelChange={handleModelChange}
        />
      </div>

      {/* Main chat area */}
      <div className="flex-1 flex flex-col h-full">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto">
          {session.messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          {isTyping && (
            <div className="p-6 text-gray-500">
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input area */}
        <ChatInput onSendMessage={handleSendMessage} disabled={isTyping} />
      </div>
    </div>
  );
}

export default App;