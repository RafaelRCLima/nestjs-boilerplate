import { PrismaService } from 'src/database/prisma.service';
import { CarsRepository } from '../cars-repository';
import { randomUUID } from 'node:crypto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaCarsRepository implements CarsRepository {
  constructor(private prisma: PrismaService) {}

  async create(model: string, color: string): Promise<void> {
    await this.prisma.cars.create({
      data: {
        id: randomUUID(),
        model,
        color,
      },
    });
  }
}
