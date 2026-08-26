import {APIRequestContext} from '@playwright/test';
import { RegisterModel } from '../models/register.model';

/**
 * Client for interacting with the login API. Clients act the same way as page objects, but for API endpoints. 
 * They encapsulate the logic for making requests and handling responses, providing a clean interface for tests to interact with the API.
 */

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