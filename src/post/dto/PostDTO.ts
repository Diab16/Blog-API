/*
{
  "id": 1,
  "title": "updated title",
  "content": "content of the post",
  "userId": 1
}

*/

import { ApiProperty } from '@nestjs/swagger';

export class PostDTO {
  @ApiProperty({
    description: 'the id of the post',
    example: '1',
  })
  id: number;
  @ApiProperty({
    description: 'the title of the post',
    example: 'a new post',
  })
  title: string;
  @ApiProperty({
    description: 'the title of the post',
    example: 'content of the post',
  })
  content: string;
  @ApiProperty({
    description: 'the id of the owner of the post',
    example: '1',
  })
  theOwnerOfThePostID: number;
}
