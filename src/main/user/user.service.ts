import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private _repository: Repository<UserEntity>,
  ) {}

  async create(data: UserEntity) {
    return this._repository.create(data).save();
  }
}
