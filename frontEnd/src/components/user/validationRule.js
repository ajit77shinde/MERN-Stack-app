export default function validate(values) {
    let lowerCaseLetters = /[a-z]/g; //validate lowercase
    let upperCaseLetters = /[A-Z]/g; //validate uppercase
    let numbers = /[0-9]/g; //Validate number

    let errors = {};
    console.log("values = ", values)

    if (!values.email) {
        errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }
    if (!values.password) {
        errors.password = 'Password is required';
    } else if (values.password.length < 8) {
        errors.password = 'Password must be 8 or more characters';
    } else if (!lowerCaseLetters.test(values.password)) {
        errors.password = 'Password must contain 1 lowercase characters';
    } else if (!upperCaseLetters.test(values.password)) {
        errors.password = 'Password must contain 1 uppercase characters';
    } else if (!numbers.test(values.password)) {
        errors.password = 'Password must contain 1 number characters';
    }
    return errors;
};
