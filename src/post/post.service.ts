import { Injectable } from '@nestjs/common';
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

  async create(createPostDto: CreatePostDto): Promise<Post> {
    const newPost = await this.postRepository.create({ ...createPostDto });
    return this.postRepository.save(newPost);
  }

  findAll(): Promise<Post[]> {
    const posts = this.postRepository.find();
    return posts;
  }

  findOne(id: number): Promise<Post | null> {
    const post = this.postRepository.findOneBy({ id });
    return post;
  }

  async update(id: number, updatePostDto: UpdatePostDto): Promise<Post | null> {
    const post = await this.postRepository.findOneBy({ id });
    post.title = updatePostDto.title;
    post.content = updatePostDto.content;
    const updatedPost = await this.postRepository.save(post);
    return updatedPost;
  }

  async remove(id: number) {
    const deletedPost = this.postRepository.delete(id);
    return deletedPost;
  }
}
