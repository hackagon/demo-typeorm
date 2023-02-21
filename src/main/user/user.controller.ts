import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  create(@Body() data) {
    return this.userService.create(data);
  }

  @Get(':userId')
  findById(@Param('userId') userId: number) {
    return this.userService.findById(userId);
  }
}
