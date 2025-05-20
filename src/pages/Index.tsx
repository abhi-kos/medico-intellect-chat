
import React from 'react';
import ChatInterface from '@/components/ChatInterface';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col p-4 md:p-8 bg-gradient-to-br from-background via-background to-muted">
      <header className="max-w-4xl mx-auto w-full mb-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-hcp-dark dark:text-white">
          HCP Assistant
        </h1>
        <p className="text-muted-foreground text-sm md:text-base">
          Your AI-powered research and support tool
        </p>
      </header>
      
      <main className="max-w-4xl mx-auto w-full flex-1">
        <ChatInterface />
      </main>
      
      <footer className="max-w-4xl mx-auto w-full mt-6 text-center text-xs text-muted-foreground">
        <p>© 2025 HCP Assistant. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
