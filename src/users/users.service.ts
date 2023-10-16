import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private readonly users: any[];

    constructor() {
        this.users = [
            {
                userId: 1,
                username: 'admin',
                password: 'admin',
            }
        ];
    }

    async findOne(username: string): Promise<any> {
        return this.users.find(user => user.username === username);
    }
}