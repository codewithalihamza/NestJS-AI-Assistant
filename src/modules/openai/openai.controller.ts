import { Body, Controller, Post } from '@nestjs/common';
import { ChatRequestDto } from './dto/chat-request.dto';
import { OpenaiService } from './openai.service';


@Controller('openai')
export class OpenaiController {
  constructor(private readonly openaiService: OpenaiService) { }

  @Post('chat')
  async chat(@Body() chatRequest: ChatRequestDto) {
    return this.openaiService.createChatRequest(chatRequest.message);
  }
}
