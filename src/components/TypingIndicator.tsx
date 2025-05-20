
import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar } from '@/components/ui/avatar';

const TypingIndicator = () => {
  return (
    <div className="flex w-full mb-4 gap-3">
      <div className="flex-shrink-0">
        <Avatar className="h-8 w-8 bg-hcp-purple text-white">
          <span className="font-semibold">AI</span>
        </Avatar>
      </div>
      
      <div className={cn(
        "max-w-[80%] md:max-w-[70%] chat-bubble-assistant py-4 px-5"
      )}>
        <div className="typing-indicator">
          <span className="typing-dot"></span>
          <span className="typing-dot"></span>
          <span className="typing-dot"></span>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;
