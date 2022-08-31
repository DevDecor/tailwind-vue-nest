import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): any {
    return this.appService.planet.findMany();
  }

  @Post()
  postHello(@Body() body) {
    return this.appService.planet.create({
      data: body,
    });
  }
  @Delete(':id')
  deleteOne(@Param('id') id) {
    return this.appService.planet.delete({ where: { id: parseInt(id) } });
  }
}
