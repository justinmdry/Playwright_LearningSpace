import {APIRequestContext} from '@playwright/test';

export default class UserClient {

    constructor(private readonly request: APIRequestContext) {}

    async getUsers(){
        return await this.request.get('https://reqres.in/api/users', {
            headers: {
                'x-api-key': 'free_user_3ISqEHlQiFcty9dyrWfkfew6937'
            }
        });
    }


    async getUsersWithId(userId: number){
        return await this.request.get(`https://reqres.in/api/users/${userId}`, {
            headers: {
                'x-api-key': 'free_user_3ISqEHlQiFcty9dyrWfkfew6937'
            }
        });
    }

    async getUsersWithIdParam(userId: number){
        return await this.request.get(`https://reqres.in/api/users/`, {
            headers: {
                'x-api-key': 'free_user_3ISqEHlQiFcty9dyrWfkfew6937'
            },
            params:{
                "id": userId
            }
        });
    }

}