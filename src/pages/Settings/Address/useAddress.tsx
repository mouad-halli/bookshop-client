import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { turnEmptyObjectValuesToUndefined } from "../../../utils/helpers"

const addressSchema = z.object({
    street1: z.string(),
    street2: z.string(),
    country: z.string(),
    city: z.string(),
    zipCode: z.string()
})

type TAddressSchema = z.infer<typeof addressSchema>

export const useAddress = () => {

    const { handleSubmit, register, formState: { errors, isSubmitting, isDirty, isValid } } = useForm<TAddressSchema>({
        resolver: zodResolver(addressSchema),
        mode: "onChange",
        defaultValues: {
            street1: "rab l3ali", street2: undefined, country: undefined, city: undefined, zipCode: undefined
        }
    })


    const onSubmit = async (dataObj: any) => {

        dataObj = turnEmptyObjectValuesToUndefined(dataObj)

        try {
        } catch (error) {
            console.log(error)
        }
    }

    return {
        handleSubmit, onSubmit, register, isSubmitting, errors, isDirty, isValid
    }
}