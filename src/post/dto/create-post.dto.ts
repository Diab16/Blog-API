import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({
    description: 'the title of the post',
    required: true,
    example: 'a new post',
  })
  title: string;
  @ApiProperty({
    description: 'the title of the post',
    required: true,
    example: 'content of the post',
  })
  content: string;
}
