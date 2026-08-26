/** 
 * This is used similarly to a data file for api testing.
 * It contains all of the end points for api calls
 * think of it as a datafile for endpoints. 
 * This is a good practice to keep all of the endpoints in one place so that if they change, you only have to change them in one place.    
 */

export const endpoints = {
    registerUser : 'https://reqres.in/api/register',

    users: {
        getUsers : 'https://reqres.in/api/users',
        getUsersWithId : 'https://reqres.in/api/users/'
    }
}