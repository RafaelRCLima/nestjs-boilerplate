import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { CarsRepository } from './repositories/cars-repository';
import { PrismaCarsRepository } from './repositories/prisma/prisma-cars-repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    { provide: CarsRepository, useClass: PrismaCarsRepository },
  ],
})
export class AppModule {}
