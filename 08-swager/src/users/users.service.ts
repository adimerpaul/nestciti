import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' },
    ];
    findAll() {
        return this.users;
    }
    findOne(id: number) {
        return this.users.find(user => user.id === id);
    }
    create(user: { name: string }) {
        // console.log(user);
        const newUser = { id: Date.now(), ...user };
        this.users.push(newUser);
        return newUser;
    }
    update(id: number, user: { name: string }) {
        console.log(user);
        console.log(id);
        const index = this.users.findIndex(u => u.id === id);
        if (index !== -1) {
            this.users[index] = { ...this.users[index], ...user };
            return this.users[index];
        }
        return null;
    }
    remove(id: number) {
        const index = this.users.findIndex(user => user.id === id);
        if (index !== -1) {
            return this.users.splice(index, 1)[0];
        }
        return null;
    }
}
