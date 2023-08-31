import { Body, Controller, Post } from '@nestjs/common';
// import { randomUUID } from 'node:crypto';
import { CreateCarsBody } from './dtos/create-cars-body';
import { CarsRepository } from './repositories/cars-repository';

@Controller()
export class AppController {
  constructor(private carsRepository: CarsRepository) {}

  @Post()
  async getHello(@Body() body: CreateCarsBody) {
    const { model, color } = body;

    await this.carsRepository.create(model, color);
  }
}
