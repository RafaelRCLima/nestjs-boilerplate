import { IsNotEmpty } from 'class-validator';

export class CreateCarsBody {
  @IsNotEmpty({
    message: 'Model name should be inserted.',
  })
  model: string;

  @IsNotEmpty({
    message: 'Please insert the car color.',
  })
  color: string;
}
