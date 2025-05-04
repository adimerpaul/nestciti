import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { console } from 'inspector';
@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService,
    ) {}
    @Get()
    getUsers() {
        return this.usersService.getUsers();
    }
    @Post()
    createUser(@Body() user: any) {
        return this.usersService.createUser(user);
    }
    @Put(':id')
    updateUser(
        @Body() user: any,
        @Param('id',ParseIntPipe) id: number ,
    ) {
        // console.log(id);
        return this.usersService.updateUser(id, user);
    }
    @Delete(':id')
    deleteUser(
        @Param('id',ParseIntPipe) id: number,
    ) {
        return this.usersService.deleteUser(id);
    }
    @Get(':id')
    getUserById(
        @Param('id',ParseIntPipe) id: number,
    ) {
        return this.usersService.getUserById(id);
    }
}
