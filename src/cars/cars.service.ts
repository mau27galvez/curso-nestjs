import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
    private cars = [
        {
            id: 1,
            brand: 'Toyota',
            model: 'Corolla',
        },
        {
            id: 2,
            brand: 'Suzuki',
            model: 'Celereo',
        },
        {
            id: 3,
            brand: 'Honda',
            model: 'Civic',
        },
    ];

    findAll() {
        return this.cars;
    }

    findOneById(id: number) {
        const [car] = this.cars.filter((car) => car.id === id);

        console.log(car);

        if (!car) {
            throw new NotFoundException(`Car with id ${id} not found.`);
        }

        return car;
    }
}
