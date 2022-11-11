import { Piu } from 'interfaces/Piu';
import { User } from 'interfaces/User';

import api from './api';

interface LikeResponse {
    piu: Piu;
    operation: 'like' | 'unlike';
}

export default class PiusServices {
    static async getPius(): Promise<Piu[]> {
        const response = await api.get('/pius');
        return response.data;
    }

    static async PiuLike(id: string): Promise<LikeResponse> {
        const response = await api.patch(`/pius/like/${id}`);
        return response.data;
    }

    static async getUser(id: string): Promise<User> {
        const response = await api.get(`/users/${id}`);
        return response.data;
    }
}
