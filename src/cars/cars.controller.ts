import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
    constructor(private readonly carsService: CarsService) {}

    @Get()
    findAll() {
        return this.carsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.carsService.findOneById(id);
    }

    @Post()
    create(@Body() body) {
        return body;
    }

    @Patch(':id')
    update(@Body() body, @Param('id', ParseIntPipe) id: number) {
        return body;
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return `delete ${id}`;
    }
}
