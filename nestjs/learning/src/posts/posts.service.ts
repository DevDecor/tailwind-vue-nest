import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Posts } from './entities/post.entity';
import { Repository } from 'typeorm/repository/Repository';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Posts) private postRepository: Repository<Posts>,
  ) {}
  create(createPostDto: CreatePostDto) {
    const newpost = this.postRepository.create(createPostDto);
    // newpost.save();
    return this.postRepository.save(newpost);
  }

  findAll() {
    return this.postRepository.find();
  }

  findOne(id: number) {
    return this.postRepository.findOneById(id);
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    const update = await this.findOne(id);
    update.completed = updatePostDto.completed;
    if (updatePostDto) update.name = updatePostDto.name;

    return this.postRepository.save(update);
  }

  async remove(id: number) {
    const res = await this.findOne(id);
    return this.postRepository.remove(res);
  }
}
