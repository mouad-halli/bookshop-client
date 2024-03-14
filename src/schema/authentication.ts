import { z } from "zod";
import { EMAIL_REGEX, PASSWORD_REGEX, WORLD_CHARACTERS_REGEX } from "../constants/regex";

export const registerFormSchema = z.object({
    firstname: z.string().min(4).max(30).regex(WORLD_CHARACTERS_REGEX, "firstname must contain only valid characters"),
    lastname: z.string().min(4).max(30).regex(WORLD_CHARACTERS_REGEX, "lastname must contain only valid characters"),
    email: z.string().email().regex(EMAIL_REGEX, "invalid email"),
    password: z.string().min(8).max(28).regex(PASSWORD_REGEX, "must contain at least 1 symbol, 1 upercase, 1 lowercase and a number"),
    passwordConfirmation: z.string()
}).refine(data => data.password === data.passwordConfirmation, {
    message: 'passwords must match',
    path: ["passwordConfirmation"]
})

export const loginFormSchema = z.object({
    email: z.string().email().regex(EMAIL_REGEX, "invalid email"),
    password: z.string(),
})

export type TRegisterFormSchema = z.infer<typeof registerFormSchema>
export type TLoginFormSchema = z.infer<typeof loginFormSchema>