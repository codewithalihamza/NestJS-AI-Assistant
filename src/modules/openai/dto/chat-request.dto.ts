import { Type } from "class-transformer";
import { IsArray, IsNotEmpty, IsString, ValidateNested } from "class-validator";

export class ChatCompletionMessageDto {
    @IsNotEmpty()
    @IsString()
    role: string;

    @IsNotEmpty()
    @IsString()
    content: string
}

export class ChatRequestDto {
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ChatCompletionMessageDto)
    message: ChatCompletionMessageDto[]
}


