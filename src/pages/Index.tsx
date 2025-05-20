
import React from 'react';
import ChatInterface from '@/components/ChatInterface';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col p-4 md:p-8 bg-gradient-to-br from-hcp-dark via-hcp-dark/95 to-hcp-dark/90">
      <header className="max-w-4xl mx-auto w-full mb-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-white">
          Agastya
        </h1>
        <p className="text-muted-foreground text-sm md:text-base">
          Your AI-powered research and support tool
        </p>
      </header>
      
      <main className="max-w-4xl mx-auto w-full flex-1">
        <ChatInterface />
      </main>
      
      <footer className="max-w-4xl mx-auto w-full mt-6 text-center text-xs text-muted-foreground">
        <p>© 2025 Agastya. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
