import { GoogleGenerativeAI } from '@google/generative-ai';
import { Injectable } from '@nestjs/common';
import { ChatCompletionMessageDto } from './dto/chat-request.dto';

@Injectable()
export class OpenaiService {
  constructor(private readonly geminiAI: GoogleGenerativeAI) { }

  async createChatRequest(messages: ChatCompletionMessageDto[]): Promise<string> {
    try {
      const model = this.geminiAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

      // Convert messages to Gemini's format
      const formattedMessages = messages.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.content }],
      }));

      // Send request to Gemini
      const result = await model.generateContent({ contents: formattedMessages });
      const response = await result.response;

      return response.text();
    } catch (error) {
      console.error('Error with Gemini API:', error);
      throw new Error('Failed to generate response.');
    }
  }
}
