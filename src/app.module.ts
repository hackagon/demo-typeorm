import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import Joi from 'joi';
import path from 'path';
import datasource, { typeormConfig } from './datasource';
import { MainModule } from './main/main.module';

@Module({
  imports: [
    /**
     * Config Env
     */
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        APP_NAME: Joi.string().required(),
        PORT: Joi.number().required(),
        DB_TYPE: Joi.string().required(),
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.string().required(),
        DB_USERNAME: Joi.string().required(),
        DB_DATABASE: Joi.string().required(),
      }),
      envFilePath: path.join(__dirname + '/../.env'),
    }),
    /**
     *  Datasource
     */
    TypeOrmModule.forRootAsync({
      useFactory: () => typeormConfig,
      dataSourceFactory: async () => {
        datasource.initialize();
        return datasource;
      },
    }),

    MainModule,
  ],

  controllers: [],
})
export class AppModule {}
