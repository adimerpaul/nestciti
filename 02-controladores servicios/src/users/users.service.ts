import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        { id: 1, name: 'Sheldon', email: 'sheldon@gmail.com' },
        { id: 2, name: 'Leonard', email: 'leonard@gmail.com' },
        { id: 3, name: 'Penny', email: 'penny@gmail.com' },
    ];
    getUsers() {
        return this.users;
    }
    createUser(user) {
        const userCreate = {
            id: this.users.length + 1,
            ...user,
        };
        this.users.push(userCreate);
        return user;
    }
    updateUser(id: number, user) {
        // console.log(id);
        const index = this.users.findIndex((user) => user.id === id);
        if (index === -1) {
            throw new NotFoundException(`User with id ${id} not found`);
        }
        this.users[index] = { ...this.users[index], ...user };
        return this.users[index];
    }
    deleteUser(id: number) {
        const index = this.users.findIndex((user) => user.id === id);
        if (index === -1) {
            return null;
        }
        const user = this.users[index];
        this.users.splice(index, 1);
        return user;
    }
    getUserById(id: number) {
        return this.users.find((user) => user.id === id);
    }
}
