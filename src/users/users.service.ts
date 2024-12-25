import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    try {
      const saltOrRounds = 10;
      createUserDto.password = await bcrypt.hash(
        createUserDto.password,
        saltOrRounds,
      );
      const newUser = await this.userRepository.create({ ...createUserDto });
      const { password, ...data } = await this.userRepository.save(newUser);
      return data;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.CONFLICT);
    }
  }

  async update(userReq, updateUserDto: UpdateUserDto) {
    try {
      const id = userReq.id;
      const user = await this.userRepository.findOneBy({ id });
      const saltOrRounds = 10;
      user.password = await bcrypt.hash(updateUserDto.password, saltOrRounds);
      const updatedUser = this.userRepository.save(user);
      return updatedUser;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
