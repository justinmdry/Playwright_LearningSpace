import {APIRequestContext} from '@playwright/test';
import { RegisterModel } from '../models/register.model';

export default class RegisterClient {

    constructor(private readonly request: APIRequestContext) {}

    async registerUser(userData: RegisterModel) {
        return await this.request.post('https://reqres.in/api/register', {
            headers: {
                'x-api-key': 'free_user_3ISqEHlQiFcty9dyrWfkfew6937'
            },
            data: userData
        });
    }
}