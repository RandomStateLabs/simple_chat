import React from 'react';
import { Bot } from 'lucide-react';
import type { Model } from '../types/chat';

interface ModelSelectorProps {
  selectedModel: Model;
  onModelChange: (model: Model) => void;
}

export function ModelSelector({ selectedModel, onModelChange }: ModelSelectorProps) {
  const models: { id: Model; name: string; description: string }[] = [
    {
      id: 'groq',
      name: 'Groq',
      description: 'Fast inference with Groq LPU',
    },
    {
      id: 'llama',
      name: 'Llama 2',
      description: 'Open source LLM by Meta',
    },
    {
      id: 'mistral',
      name: 'Mistral',
      description: 'Efficient and powerful language model',
    },
  ];

  return (
    <div className="p-4 border-b border-gray-200">
      <h2 className="flex items-center gap-2 text-lg font-semibold mb-4">
        <Bot className="w-5 h-5" />
        Model Selection
      </h2>
      <div className="space-y-2">
        {models.map((model) => (
          <button
            key={model.id}
            onClick={() => onModelChange(model.id)}
            className={`w-full text-left p-3 rounded-lg transition-colors ${
              selectedModel === model.id
                ? 'bg-purple-100 text-purple-900'
                : 'hover:bg-gray-100'
            }`}
          >
            <div className="font-medium">{model.name}</div>
            <div className="text-sm text-gray-600">{model.description}</div>
          </button>
        ))}
      </div>
    </div>
  );
}