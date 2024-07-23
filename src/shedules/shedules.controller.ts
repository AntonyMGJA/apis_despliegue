import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ShedulesService } from './shedules.service';
import { newShed, updatShed } from './shedelus.dto';

@Controller('shedules')
export class ShedulesController {
    constructor(private readonly shedulesService: ShedulesService) {}

    @Post()
    create(@Body() newShed: newShed) {
        return this.shedulesService.createS(newShed);
    }

    @Get()
    findAll() {
        return this.shedulesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.shedulesService.findShedules(id);
    }

    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() updateShed: updatShed) {
        return this.shedulesService.updateS(id, updateShed);
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.shedulesService.deleteS(id);
    }
}