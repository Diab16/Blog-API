import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthPayloadDTO } from './dto/auth.dto';
import { LocalGuard } from './guardes/local.guard';
import { JwtAuthGuard } from './guardes/jwt.guard';
import { Request } from 'express';
import {
  ApiBearerAuth,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalGuard)
  @ApiOperation({ summary: 'registered user login' })
  @ApiOkResponse({
    description: 'Valid login , auth token returned',
  })
  @ApiNotFoundResponse({ description: 'not found user' })
  login(@Body() AuthPayload: AuthPayloadDTO, @Req() req: Request) {
    const user = this.authService.validateUser(AuthPayload);
    return user;
  }

  @Get('status')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'check the validation of the user token' })
  @ApiOkResponse({
    description: 'valid token',
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized user (not valid token)',
  })
  status(@Req() req: Request) {
    console.log(req.user);
    return req.user;
  }
}
