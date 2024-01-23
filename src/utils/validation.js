export const emailAndPassValidation = (email, password) => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    const isValidEmail = emailRegex.test(email);
    const isValidPassword = passRegex.test(password);

    if (!isValidEmail) return 'Email id is not valid';
    if (!isValidPassword) return 'Password is not valid';

    return null;
}