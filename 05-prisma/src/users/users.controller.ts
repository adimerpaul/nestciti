import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService,
    ) {}
    @Get()
    findAll() {
        return this.usersService.findAll();
    }

    @Post()
    create(@Body() user) {
        return this.usersService.create(user);
    }

    @Get(':id')
    findOne(@Param('id',ParseIntPipe) id: number) {
        return this.usersService.findOne(id);
    }
    @Put(':id')
    update(@Param('id',ParseIntPipe) id: number, @Body() user) {
        return this.usersService.update(id, user);
    }
    @Delete(':id')
    delete(@Param('id',ParseIntPipe) id: number) {
        return this.usersService.remove(id);
    }
}
