import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type Player = any;

@Injectable()
export class UsersService {
    private readonly players = [
        {
            userId: 1,
            username: 'john',
            password: 'changeme',
        },
        {
            userId: 2,
            username: 'maria',
            password: 'guess',
        },
    ];

    async findOne(username: string): Promise<Player | undefined> {
        return this.players.find(player => player.username === username);
    }
