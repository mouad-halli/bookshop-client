import { EMAIL_REGEX, PASSWORD_REGEX, WORLD_CHARACTERS_REGEX } from "../constants/regex"

export const sleep = (time: number) => new Promise(resolve => setTimeout(resolve, time))

export const validateWorldCharactersString = (str: string, validLenght: number) => {
    let errorMsg = ''

    if (!WORLD_CHARACTERS_REGEX.test(str))
        errorMsg = 'must only contain valid characters'
    else if (str.length < validLenght)
        errorMsg = 'must contain at least 4 characters'

    return errorMsg
}

export const validateEmail = (str: string) => !EMAIL_REGEX.test(str) ? 'Email invalid' : ''

export const validatePassword = (str: string) => !PASSWORD_REGEX.test(str) ? 'password must contain min 8 characters, 1 symbol, 1 upercase, 1 lowercase and a number' : ''

// loop trough object and !value to undefined
export const turnEmptyObjectValuesToUndefined = (object: any) => {

    for ( const key in object ) {
        if (!object[key])
            object[key] = undefined
    }

    return object
}