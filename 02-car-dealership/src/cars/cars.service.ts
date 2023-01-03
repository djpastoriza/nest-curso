import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';
import { BadRequestException, ConflictException } from '@nestjs/common/exceptions';

@Injectable()
export class CarsService {
  private cars: Car[] = [];

  findAll() {
    return this.cars;
  }

  findById(id: string) {
    const car = this.cars.find((c) => c.id === id);
    if (!car) throw new NotFoundException(`Car with id ${id} not found`);
    return car;
  }

  create(createCarDto: CreateCarDto) {
    const car: Car = {
      id: uuid(),
      ...createCarDto
    };
    if (this.cars.some(c => c.brand == car.brand && c.model === car.model)) {
      throw new ConflictException(`Car with brand and model: ${car.brand} - ${car.model} alredy exits.`)
    }
    this.cars.push(car);
    return car;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    let carDB = this.findById(id);
    if (updateCarDto.id && updateCarDto.id !== id)
      throw new BadRequestException('Car id es not valid inside body');

    const index = this.cars.findIndex((car) => car.id === id);
    carDB = {
      ...carDB,
      ...updateCarDto,
      id,
    };
    this.cars[index] = carDB;
    return carDB;
  }

  delete(id: string) {
    let carDB = this.findById(id);
    this.cars = this.cars.filter(car => car.id !== id);
  }

  fillCarsWithSeedData(cars: Car[]) {
    this.cars = cars;
  }
}
