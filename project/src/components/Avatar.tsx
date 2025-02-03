import React from 'react';
import { Bot, Volume2, VolumeX, Mic, MicOff, Palette } from 'lucide-react';

interface AvatarProps {
  isSpeaking: boolean;
  isListening: boolean;
  toggleSpeech: () => void;
  toggleListening: () => void;
  onCustomize: () => void;
}

export function Avatar({ isSpeaking, isListening, toggleSpeech, toggleListening, onCustomize }: AvatarProps) {
  return (
    <div className="relative flex flex-col items-center">
      <div className="w-32 h-32 rounded-full bg-blue-100 flex items-center justify-center shadow-lg relative overflow-hidden">
        <Bot className="w-20 h-20 text-blue-600" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500 animate-pulse"></div>
      </div>
      
      <div className="mt-4 flex gap-3">
        <button
          onClick={toggleSpeech}
          className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
          title={isSpeaking ? "Mute" : "Unmute"}
        >
          {isSpeaking ? <Volume2 className="w-5 h-5 text-blue-600" /> : <VolumeX className="w-5 h-5 text-gray-600" />}
        </button>
        
        <button
          onClick={toggleListening}
          className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
          title={isListening ? "Stop listening" : "Start listening"}
        >
          {isListening ? <Mic className="w-5 h-5 text-red-600" /> : <MicOff className="w-5 h-5 text-gray-600" />}
        </button>
        
        <button
          onClick={onCustomize}
          className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
          title="Customize avatar"
        >
          <Palette className="w-5 h-5 text-purple-600" />
        </button>
      </div>
    </div>
  );
}