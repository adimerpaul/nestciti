import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        { id: 1, name: 'John Doe', email: 'john@gmail.com'}
    ];
    async create(user) {
        const userExists = this.users.find(userFind => userFind.name === user.name);
        if (userExists) {
            throw new BadRequestException('EL usuario ' + user.name + ' ya existe');
        }
        const userCreated = { id: this.users.length + 1, ...user };
        this.users.push(userCreated);
        return userCreated;
    }
    async findAll() {
        return this.users;
    }
    async findOne(id: number) {
        const userFind = this.users.find(user => user.id === id);
        if (!userFind) {
            throw new BadRequestException('No se encontró el usuario con id ' + id);
        }
        return userFind;
    }
    async update(id: number, user) {
        const index = this.users.findIndex(user => user.id === id);
        if (index == -1) {
            throw new BadRequestException('No se encontró el usuario con id ' + id);
        }
        const userFind = this.users[index];
        const userExists = this.users.find(userFind => userFind.name === user.name && userFind.id !== id);
        if (userExists) {
            throw new BadRequestException('EL usuario ' + user.name + ' ya existe');
        }
        const userUpdated = { ...userFind, ...user };
        this.users[index] = userUpdated;
        return userUpdated;
    
    }
    async remove(id: number) {
        const index = this.users.findIndex(user => user.id === id);
        if (index !== -1) {
            const deletedUser = this.users[index];
            this.users.splice(index, 1);
            return deletedUser;
        }
        return null;
    }
}
