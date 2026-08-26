/**
 * This is the model for interacting with the register and login API. 
 * It defines the structure of the data that will be sent to the API endpoints for user registration and login.
 * The model ensures that the data sent to the API is consistent and adheres to the expected format, 
 * which helps prevent errors and improves code maintainability.
 * 
 * Additionally you can make models for responses and many more utilities. This is a good practice to keep your code organized and maintainable.
 * 
 * @interface RegisterModel
 * @property {string} email - The email address of the user. This is a required field and must be a valid email format.
 * @property {string} password - The password for the user account. This is a required field and should meet the security requirements of the application.
 */


export interface RegisterModel {
    email: string;
    password: string;
}