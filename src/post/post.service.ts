import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  async create(createPostDto: CreatePostDto, user): Promise<Post> {
    const newPost = await this.postRepository.create({ ...createPostDto });
    newPost.userId = user.id;
    return this.postRepository.save(newPost);
  }

  findAll(): Promise<Post[]> {
    const posts = this.postRepository.find();
    if (!posts) {
      throw new NotFoundException();
    }
    return posts;
  }

  findOne(id: number): Promise<Post | null> {
    const post = this.postRepository.findOneBy({ id });
    if (!post) {
      throw new NotFoundException();
    }
    return post;
  }

  async update(
    id: number,
    updatePostDto: UpdatePostDto,
    user,
  ): Promise<Post | null> {
    const post = await this.postRepository.findOneBy({ id });
    if (!post) {
      throw new NotFoundException();
    }
    if (post.userId !== user.id) {
      throw new UnauthorizedException();
    }
    post.title = updatePostDto.title;
    post.content = updatePostDto.content;
    const updatedPost = await this.postRepository.save(post);
    return updatedPost;
  }

  async remove(id: number, user) {
    const findPost = await this.postRepository.findOneBy({ id });
    if (!findPost) {
      throw new NotFoundException();
    }
    if (findPost.userId !== user.id) {
      throw new UnauthorizedException();
    }
    const deletedPost = this.postRepository.delete(id);
    if (!deletedPost) {
      throw new NotFoundException();
    }
    return deletedPost;
  }
}
