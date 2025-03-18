import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log("héhé");
    return this.appService.getHello();
  }

  @Get("test")
  getTest(): string {
    const date = new Date();
    return date.getDay();
    return "test";
  }
}
