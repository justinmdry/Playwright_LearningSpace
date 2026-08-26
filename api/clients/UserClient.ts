import {APIRequestContext} from '@playwright/test';
import {endpoints} from '../endpoints/endpoints';

/**
 * Client for interacting with the login API. Clients act the same way as page objects, but for API endpoints. 
 * They encapsulate the logic for making requests and handling responses, providing a clean interface for tests to interact with the API.
 */

export default class UserClient {

    constructor(private readonly request: APIRequestContext) {}

    async getUsers(){
        return await this.request.get(endpoints.users.getUsers, {
            headers: {
                'x-api-key': 'free_user_3ISqEHlQiFcty9dyrWfkfew6937'
            }
        });
    }


    async getUsersWithId(userId: number){
        return await this.request.get(endpoints.users.getUsersWithId + userId, {
            headers: {
                'x-api-key': 'free_user_3ISqEHlQiFcty9dyrWfkfew6937'
            }
        });
    }

    async getUsersWithIdParam(userId: number){
        return await this.request.get(endpoints.users.getUsersWithId + userId, {
            headers: {
                'x-api-key': 'free_user_3ISqEHlQiFcty9dyrWfkfew6937'
            },
            params:{
                "id": userId
            }
        });
    }

}