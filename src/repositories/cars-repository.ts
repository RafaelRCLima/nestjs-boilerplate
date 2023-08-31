export abstract class CarsRepository {
  abstract create(model: string, color: string): Promise<void>;
}
