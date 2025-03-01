import { ChatSession, GenerativeModel, GoogleGenerativeAI } from '@google/generative-ai';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { v4 } from 'uuid';
import { CreateAIMessageDto } from './dto/create-ai-message.dto';


@Injectable()
export class AiAssistantService {
  private readonly googleAI: GoogleGenerativeAI;
  private readonly model: GenerativeModel;
  private chatSessions: { [sessionId: string]: ChatSession } = {};
  private readonly logger = new Logger(AiAssistantService.name)
  constructor(configService: ConfigService) {
    const geminiApiKey = configService.get('API_KEY');
    this.googleAI = new GoogleGenerativeAI(geminiApiKey)
    this.model = this.googleAI.getGenerativeModel({
      model: process.env.GEMINI_MODEL
    })
  }
  async getChatSession(sessionId?: string): Promise<{ sessionId: string, chat: ChatSession }> {
    let requestSessionId = sessionId ?? v4();
    let result = this.chatSessions[requestSessionId]
    if (!result) {
      result = this.model.startChat()
      this.chatSessions[requestSessionId] = result
    }
    return {
      sessionId: requestSessionId,
      chat: result
    }
  }

  async generateText(createAIMessageDto: CreateAIMessageDto) {
    try {
      const { sessionId, chat } = await this.getChatSession(createAIMessageDto?.sessionId)
      const result = await chat.sendMessage(createAIMessageDto.prompt)
      const modelText = await result.response.text()
      return {
        result: modelText,
        sessionId
      }
    } catch (error) {
      this.logger.error("Error while generate text from Gemini API =>", error)
      console.log(error)
    }
  }
}
