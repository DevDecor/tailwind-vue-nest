import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';
import { Posts } from './posts/entities/post.entity';

const config: SqliteConnectionOptions = {
  type: 'sqlite',
  database: './db',
  entities: [Posts],
  synchronize: true,
};

@Module({
  imports: [PostsModule, TypeOrmModule.forRoot(config)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
