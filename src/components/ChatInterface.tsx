
import React, { useState, useRef, useEffect } from 'react';
import ChatMessage, { MessageRole } from './ChatMessage';
import ChatInput from './ChatInput';
import TypingIndicator from './TypingIndicator';
import { Card, CardContent } from '@/components/ui/card';

interface Message {
  id: string;
  content: string;
  role: MessageRole;
  timestamp: Date;
}

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm Agastya, your AI assistant. How can I help you today?",
      role: 'assistant',
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = async (content: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      role: 'user',
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);
    
    // Simulate API call delay
    setTimeout(() => {
      // Example response - in real implementation, this would come from your API
      const response = simulateResponse(content);
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        role: 'assistant',
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000); // Random delay between 1.5-2.5s for realistic feel
  };

  // Simulate a response - this would be replaced by your actual API call
  const simulateResponse = (query: string): string => {
    // Just for demo purposes
    if (query.toLowerCase().includes('research') || query.toLowerCase().includes('article')) {
      return "Based on the latest research articles in our database, recent studies suggest that combination therapy may be more effective for patients with this condition. Would you like me to provide specific article references?";
    } else if (query.toLowerCase().includes('conference')) {
      return "The annual medical conference will be held in Boston from September 15-18, 2025. Registration is currently open for panel members. Would you like details about your scheduled presentations?";
    } else if (query.toLowerCase().includes('honorarium') || query.toLowerCase().includes('payment')) {
      return "I can see that your honorarium for the May panel has been processed and should be deposited within 3-5 business days. The total amount is $1,500. Is there anything else you'd like to know about your payments?";
    } else {
      return "Thank you for your query. I'll help you find the information you need. Could you please provide more details about your request so I can assist you more effectively?";
    }
  };

  return (
    <Card className="flex flex-col h-[85vh] mx-auto rounded-xl shadow-xl bg-white/5 backdrop-blur-sm border-hcp-blue/20 overflow-hidden">
      <CardContent className="flex flex-col h-full p-0">
        <div className="flex-1 overflow-y-auto p-4 scrollbar-thin">
          <div className="space-y-4">
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                content={message.content}
                role={message.role}
                timestamp={message.timestamp}
              />
            ))}
            {isTyping && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </div>
        </div>
        <ChatInput onSendMessage={handleSendMessage} isDisabled={isTyping} />
      </CardContent>
    </Card>
  );
};

export default ChatInterface;
