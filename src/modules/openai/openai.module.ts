import { GoogleGenerativeAI } from '@google/generative-ai';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { OpenaiController } from './openai.controller';
import { OpenaiService } from './openai.service';

@Module({
  imports: [ConfigModule],
  controllers: [OpenaiController],
  providers: [
    OpenaiService,
    {
      provide: GoogleGenerativeAI,
      useFactory: (configService: ConfigService) =>
        new GoogleGenerativeAI(configService.getOrThrow('API_KEY')),
      inject: [ConfigService],
    },
  ],
})
export class OpenaiModule { }
