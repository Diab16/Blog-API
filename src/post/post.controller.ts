import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { Request } from 'express';

import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guardes/jwt.guard';
import { PostDTO } from './dto/PostDTO';

@ApiTags('Posts')
@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'create new post' })
  @ApiOkResponse({
    description: 'Post created successfully',
    type: CreatePostDto,
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized',
  })
  @ApiBadRequestResponse({ description: 'bad request' })
  async create(@Body() createPostDto: CreatePostDto, @Req() req: Request) {
    return await this.postService.create(createPostDto, req.user);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all posts' })
  @ApiOkResponse({
    description: 'Post created successfully',
    type: PostDTO,
    isArray: true,
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized',
  })
  findAll() {
    return this.postService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get Post by id' })
  @ApiOkResponse({
    description: 'post founded',
    type: PostDTO,
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized',
  })
  @ApiNotFoundResponse({ description: 'not found' })
  findOne(@Param('id') id: string) {
    return this.postService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'edit post' })
  @ApiOkResponse({
    description: 'Post edited',
    type: PostDTO,
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized owner only can edit',
  })
  @ApiNotFoundResponse({ description: 'not found' })
  update(
    @Param('id') id: string,
    @Body() updatePostDto: UpdatePostDto,
    @Req() req: Request,
  ) {
    return this.postService.update(+id, updatePostDto, req.user);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'delete post' })
  @ApiOkResponse({
    description: 'delete post',
    type: PostDTO,
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized owner only can delete',
  })
  @ApiNotFoundResponse({ description: 'not found' })
  remove(@Param('id') id: string, @Req() req: Request) {
    return this.postService.remove(+id, req.user);
  }
}
