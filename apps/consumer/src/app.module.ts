import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TgModule } from './tg/tg.module';

@Module({
  imports: [TgModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
