import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({
    description: 'the title of the post',
    required: true,
    example: 'a new post',
  }) // required: false if not reqird or null (title?:string)
  title: string;
  @ApiProperty({
    description: 'the title of the post',
    required: true,
    example: 'content of the post',
  })
  content: string;
  // for array and nested object -> @ApiProperty({type:[string],enum:Category})
}
