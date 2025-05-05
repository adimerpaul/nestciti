import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('Controller for users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService,
    ) {}

    @Get()
    @ApiOperation({ summary: 'Listar a todos los usuarios' })
    findAll() {
        return this.usersService.findAll();
    }
    @Get(':id')
    @ApiOperation({ summary: 'Buscar un usuario por ID' })
    @ApiParam({ name: 'id', type: Number, description: 'ID del usuario a buscar' })
    findOne(
        @Param('id', ParseIntPipe) id: number,
    ) {
        return this.usersService.findOne(id);
    }
    @Post()
    create(
        @Body() user,
    ) {
        return this.usersService.create(user);
    }
    @Put(':id')
    update(
        @Body() user,
        @Param('id', ParseIntPipe) id: number,
    ) {
        return this.usersService.update(id, user);
    }
    @Delete(':id')
    remove(
        @Param('id', ParseIntPipe) id: number,
    ) {
        return this.usersService.remove(id);
    }
}
