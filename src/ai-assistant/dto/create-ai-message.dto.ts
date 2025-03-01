import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateAIMessageDto {
    @IsString()
    @IsNotEmpty()
    prompt: string;

    @IsString()
    @IsOptional()
    sessionId?: string;
}