
import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar } from '@/components/ui/avatar';
import { User } from 'lucide-react';

export type MessageRole = 'user' | 'assistant';

interface ChatMessageProps {
  content: string;
  role: MessageRole;
  timestamp?: Date;
}

const ChatMessage: React.FC<ChatMessageProps> = ({
  content,
  role,
  timestamp = new Date(),
}) => {
  return (
    <div
      className={cn(
        "flex w-full mb-4 gap-3",
        role === 'user' ? "justify-end" : "justify-start"
      )}
    >
      {role === 'assistant' && (
        <div className="flex-shrink-0">
          <Avatar className="h-8 w-8 bg-hcp-purple text-white flex items-center justify-center">
            <span className="font-semibold">A</span>
          </Avatar>
        </div>
      )}
      
      <div
        className={cn(
          "max-w-[80%] md:max-w-[70%]",
          role === 'user' ? "chat-bubble-user" : "chat-bubble-assistant"
        )}
      >
        <p className="whitespace-pre-wrap">{content}</p>
        <div className={cn(
          "text-xs mt-1",
          role === 'user' ? "text-blue-100" : "text-gray-500 dark:text-gray-400"
        )}>
          {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
      
      {role === 'user' && (
        <div className="flex-shrink-0">
          <Avatar className="h-8 w-8 bg-hcp-blue text-white flex items-center justify-center">
            <User size={18} />
          </Avatar>
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
