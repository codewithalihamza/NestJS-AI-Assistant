import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AiAssistantService } from './ai-assistant.service';
import { CreateAIMessageDto } from './dto/create-ai-message.dto';

@Controller('ai_assistant')
export class AiAssistantController {
  constructor(private readonly aiAssistantService: AiAssistantService) {}

  @Post('chat')
  @UsePipes(new ValidationPipe({ transform: true }))
  createAIMessage(@Body() createAIMessageDto: CreateAIMessageDto) {
    return this.aiAssistantService.generateText(createAIMessageDto);
  }
}
