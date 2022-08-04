import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = config.port;
  const host = config.host;
  await app.listen(port, host).then(() => {
    console.info('Please test with URLs');
    console.log(`http://${host}:${port}/auth/google`);
  });
}
bootstrap();
