export const validate = (value:string) => {
    let isValid:boolean = true;

    console.log(value.trim().length);

    isValid = isValid && value.trim().length > 0;

    console.log("isValid", isValid);

    return isValid;
}

export const validateEmailFormat = (value:string) => {
    let isValid:boolean = true;
    isValid = isValid && /^\S+@\S+\.\S+$/.test(value);

    return isValid;
}