import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
    constructor(
        private readonly prisma: PrismaService,
    ) {}
    create(user) {
        return this.prisma.user.create({ data: user });
    }
    findAll() {
        return this.prisma.user.findMany();
    }
    findOne(id: number) {
        return this.prisma.user.findUnique({ where: { id } });
    }
    update(id: number, user) {
        return this.prisma.user.update({ where: { id }, data: user });
    }
    remove(id: number) {
        return this.prisma.user.delete({ where: { id } });
    }
}
