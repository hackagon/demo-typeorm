import _ from 'lodash';
import dotenv from 'dotenv';
import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSourceOptions } from 'typeorm';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../..', '.env') });
const configService = new ConfigService();

export const typeormConfig: DataSourceOptions & TypeOrmModuleOptions = {
  entities: [__dirname + '/../entity/*{.ts,.js}'],
  migrations: [__dirname + '/../migrations/*{.ts,.js}'],
  type: 'postgres',
  host: configService.get('DB_HOST'),
  port: _.parseInt(configService.get('DB_PORT'), 10),
  username: configService.get('DB_USERNAME'),
  password: configService.get<string>('DB_PASSWORD'),
  database: configService.get('DB_DATABASE'),
  migrationsRun: false,
  logging: false,
  migrationsTransactionMode: 'each',
  synchronize: false,
};

const datasource = new DataSource(typeormConfig);

export default datasource;
