import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { OpenaiModule } from './modules/openai/openai.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    OpenaiModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
