import { Controller, Post, Body, Patch, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { Request } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'register new user' })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'edit user passwrod' })
  @ApiOkResponse({
    description: 'password edited Successfully',
  })
  update(string, @Body() updateUserDto: UpdateUserDto, @Req() req: Request) {
    return this.usersService.update(req.user, updateUserDto);
  }
}
