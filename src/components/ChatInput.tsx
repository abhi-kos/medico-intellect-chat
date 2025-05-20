
import React, { useState, FormEvent } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isDisabled?: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isDisabled = false }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (message.trim() && !isDisabled) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="flex items-end gap-2 border-t border-hcp-blue/20 p-4 bg-hcp-dark/80 backdrop-blur-sm">
      <div className="relative flex-1">
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask a question..."
          className="resize-none pr-12 py-3 min-h-[60px] max-h-[200px] bg-hcp-dark/80 text-white placeholder:text-gray-400 
                     overflow-y-auto shadow-md shadow-hcp-blue/10 focus-visible:ring-1 focus-visible:ring-hcp-purple 
                     border border-hcp-blue/30 hover:border-hcp-blue/50 transition-colors"
          disabled={isDisabled}
          rows={1}
        />
        <Button
          type="submit"
          size="icon"
          className="absolute right-2 bottom-2 h-8 w-8 bg-hcp-blue hover:bg-hcp-blue/90 shadow-md shadow-hcp-purple/20"
          disabled={!message.trim() || isDisabled}
        >
          <Send size={16} className="text-white" />
        </Button>
      </div>
    </form>
  );
};

export default ChatInput;
