import { FieldValues, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { createBook, updateBook } from "../../../../services/api/book"
import { BookType } from "../../../../@Types/book"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { GENRES, LANGUAGES } from "@/constants/enum/book"
import { createBookSchema, editBookSchema } from "@/schema/book"
import { z } from "zod"

type addItemType = (item: BookType) => void
type updateItemType = (updatedItem: BookType) => void

const useListingForm = (
    addItem: addItemType | undefined,
    updateItem: updateItemType | undefined,
    isEditMode: boolean,
    listing: BookType | undefined,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
    
    const [isLoading, setIsLoading] = useState(false)

    const isValidLanguage = (genre: string): genre is LANGUAGES => {
        return Object.values(LANGUAGES).includes(genre as LANGUAGES)
    }

    const isValidGenre = (genre: string): genre is GENRES => {
        return Object.values(GENRES).includes(genre as GENRES);
    }

    const schema = isEditMode ? editBookSchema : createBookSchema;

    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        mode: "onChange",
        defaultValues: {
            title: listing ? listing.title : "",
            author: listing ? listing.author : "",
            description: listing ? listing.description : "",
            price: listing ? listing.price : 0,
            year: listing ? listing.year : 0,
            stockCount: listing ? listing.stockCount : 0,
            image: undefined,
            bookLanguage: listing && isValidLanguage(listing.bookLanguage) ? listing.bookLanguage : undefined,
            genre:   listing && isValidGenre(listing.genre) ? listing.genre : undefined,
        }
    })

    const { toast } = useToast()

    const onSubmit = async (data: z.infer<typeof schema>) => {
        setIsLoading(true)
        try {
            const formData = new FormData()
            const s = isEditMode ? form.formState.dirtyFields : data
            for (const key in s) {
                if (key === 'image') {
                    formData.append(key, data.image[0])
                } else
                    formData.append(key, data[key as keyof z.infer<typeof schema>])
            }

            // for (var pair of formData.entries()) {
            //     console.log(pair[0]+ ', ' + pair[1]); 
            // }

            if (!isEditMode && addItem) {
                const book = await createBook(formData)
                addItem(book)
                toast({
                    variant: "success",
                    title: "Product Created",
                    description: `Book created and active for sells.`,
                })
                setIsOpen(false)

            } else if (isEditMode && updateItem && listing) {
                const updatedBook = await updateBook(formData, listing._id)
                updateItem(updatedBook)
                toast({
                    variant: "success",
                    title: "Product Updated",
                    description: `Book updated and active for sells.`,
                })
                setIsOpen(false)
            }
            // form.reset()
            setIsLoading(false)

        } catch (error) {
            console.log(error)
            toast({
                variant: "destructive",
                title: "Action Failed",
            })
            setIsLoading(false)
        }
    }

    return {
        form,
        onSubmit,
        isLoading
    }
}

export default useListingForm