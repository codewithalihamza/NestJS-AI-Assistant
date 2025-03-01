import { Controller, Delete, Get, Param } from '@nestjs/common';
import { OpenaiService } from './openai.service';


@Controller('openai')
export class OpenaiController {
  constructor(private readonly openaiService: OpenaiService) { }

  @Get()
  findAll() {
    return this.openaiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.openaiService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.openaiService.remove(+id);
  }
}
