export type Model = 'groq' | 'llama' | 'mistral';

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

export interface ChatSession {
  id: string;
  messages: Message[];
  model: Model;
  createdAt: number;
}