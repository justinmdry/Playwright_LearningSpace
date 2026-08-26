import { RegisterModel } from "../../api/models/register.model";
import {expect, test} from "../../fixtures/Hooks";

test('simple test to check the api',{tag : ['@api']}, async ({userClient}) => {

    const response = await userClient.getUsers();

    expect(response.status()).toBe(200);

    console.log(await response.json());

    const response2 = await userClient.getUsersWithId(2);
    expect(response2.status()).toBe(200);
    console.log(await response2.json());

    const response3 = await userClient.getUsersWithIdParam(2);
    expect(response3.status()).toBe(200);
    console.log(await response3.json());

    const response4 = await userClient.getUsersWithIdParam(25);
    expect(response4.status()).toBe(404);
    console.log(await response4.json());


});

test('simple test to check the register api',{tag : ['@api']}, async ({registerClient}) => {
    const userData : RegisterModel = {
        email: "eve.holt@reqres.in",
        password: "pistol"
    };

    const userData2 : RegisterModel = {
        email: "",
        password: "pistol"
    };


    const response = await registerClient.registerUser(userData);
    expect(response.status()).toBe(200);
    console.log(await response.json());

    const response2 = await registerClient.registerUser(userData2);
    expect(response2.status()).toBe(400);
    console.log(await response2.json());
});

test('simple test to check the login api',{tag : ['@api']}, async ({loginClient}) => {
    const userData : RegisterModel = {
        email: "eve.holt@reqres.in",
        password: "cityslicka"
    };
    
    const userData2: RegisterModel ={
        email: "eve.holt@reqres.in",
        password: ""
    }

    const response = await loginClient.loginUser(userData);
    expect(response.status()).toBe(200);
    console.log(await response.json());

    const response2 = await loginClient.loginUser(userData2);
    expect(response2.status()).toBe(400);
    console.log(await response2.json());
});