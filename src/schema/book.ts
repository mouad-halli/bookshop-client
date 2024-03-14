import { z } from "zod";
import { GENRES, LANGUAGES } from "../constants/book";

export const bookSchema = z.object({
    title: z.string().min(4).max(30),
    author: z.string().min(4).max(30),
    description: z.string().optional(),
    price: z.number(),
    genre: z.nativeEnum(GENRES),
    language: z.nativeEnum(LANGUAGES),
})

export type TBookSchema = z.infer<typeof bookSchema>