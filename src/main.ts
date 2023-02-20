import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import datasource from './datasource';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  console.log('Datasource init:', datasource.isInitialized);
}
bootstrap();
