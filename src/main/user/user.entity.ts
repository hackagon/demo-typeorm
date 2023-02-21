import datasource from 'src/datasource';
import {
  AfterLoad,
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { LoginEntity } from '../login/login.entity';
import _ from 'lodash';

@Entity({ name: 'user' })
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ name: 'first_name', length: 36, nullable: true })
  firstName: string;

  @Column({ name: 'last_name', length: 36, nullable: true })
  lastName: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @AfterLoad()
  async embedLoginCount() {
    const loginCount = await datasource
      .getRepository(LoginEntity)
      .countBy({ userId: this.id });
    _.set(this, 'loginCount', loginCount);
  }
}
