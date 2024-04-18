import { z } from "zod";
import { GENRES, LANGUAGES } from "../constants/book";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/gif"];

const imageSuperRefineValidation = ([file]: File[], ctx: z.RefinementCtx) => {
    if (file?.size > MAX_FILE_SIZE)
        ctx.addIssue({
            code: z.ZodIssueCode.too_big,
            type: 'array',
            message: `image too large, Max image size is ${MAX_FILE_SIZE}`,
            maximum: MAX_FILE_SIZE,
            inclusive: true
        })
    
    if (!ACCEPTED_IMAGE_TYPES.includes(file?.type))
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: `Only  ${Array.from(new Set(ACCEPTED_IMAGE_TYPES.join(', ').split('image/'))).toString()} formats are supported.`
        })
}

export const bookSchema = z.object({
    title: z.string().min(4).max(30),
    author: z.string().min(4).max(30),
    description: z.string().min(10).max(300),
    price: z.number().min(0),
    year: z.number().int().min(1).max(new Date().getFullYear()),
    genre: z.nativeEnum(GENRES),
    bookLanguage: z.nativeEnum(LANGUAGES),
    image: z./*instanceof(File)*/any().superRefine(imageSuperRefineValidation)
})

export type TBookSchema = z.infer<typeof bookSchema>