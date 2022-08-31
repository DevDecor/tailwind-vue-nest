import { Injectable } from '@nestjs/common';
import { Posts } from './posts/entities/post.entity';
@Injectable()
export class AppService {
  private todos: Posts[] = [{ id: 0, name: 'Washing', completed: false }];
  getHello(): Posts[] {
    return this.todos;
  }
  addTodo(title: string): Posts {
    const newTodo: Posts = { id: 0, name: title, completed: false };

    this.todos.push(newTodo);
    return newTodo;
  }
}
