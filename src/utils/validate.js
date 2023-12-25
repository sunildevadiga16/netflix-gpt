export const validateFields = (email, password) =>{
    const isEmailValid = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email);
    const isPasswordValid = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);

    if(!isEmailValid) return 'Email Id is not valid!';
    if(!isPasswordValid) return 'Password is not valid!';

    return null;

}