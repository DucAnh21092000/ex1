export const CHANGE_PASSWORD = 'change_password';
export const CHANGE_NEW_PASSWORD = 'change_new_password';
export const CHANGE_USER_NAME = 'change_user_name';
export const LOGIN = 'login';
export const UPDATE ='update';
export const FORGET ='forget';
export const CREATE ='create';
export const CHANGE_PHONE_NUMBER = 'change_phone_number';

export const submit =() => {
    return {
        type:"login"
    }
}
export const update =() => {
    return {
        type:"update"
    }
}
export const forget =() => {
    return {
        type:"forget"
    }
}

export const create =() => {
    return {
        type:"create"
    }
}

export const setUserName = (value) => {
    return {
        type: CHANGE_USER_NAME,
        payload: value,
    }
}
export const setPassword = (value) => {
    return {
        type: CHANGE_PASSWORD,
        payload: value,
    }
}
export const setPhoneNumber = (value) => {
    return {
        type: CHANGE_PHONE_NUMBER,
        payload: value,
    }
}

export const setNewPassword = (value) => {
    return {
        type: CHANGE_NEW_PASSWORD,
        payload: value,
    }
}

