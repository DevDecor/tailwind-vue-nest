import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreatePostDto } from './posts/dto/create-post.dto';
import { Posts } from './posts/entities/post.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Posts[] {
    return this.appService.getHello();
  }

  @Post()
  addTodo(@Body() body: CreatePostDto): Posts {
    return this.appService.addTodo(body.name);
  }
}
