import { Injectable, NotFoundException } from '@nestjs/common';
import { AuthPayloadDTO } from './dto/auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly UsersRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async validateUser({
    username,
    password,
  }: AuthPayloadDTO): Promise<string | null> {
    const findUser = await this.UsersRepository.findOneBy({ username });
    if (!findUser) throw new NotFoundException();
    const isMatch = await bcrypt.compare(password, findUser.password);
    if (isMatch) {
      const { password, ...user } = findUser;
      return this.jwtService.sign(user);
    }
    return null;
  }
}
