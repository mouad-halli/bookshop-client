import { zodResolver } from "@hookform/resolvers/zod"
import { FieldValues, useForm } from "react-hook-form"
import { z } from "zod"
// import { turnEmptyObjectValuesToUndefined } from "../../../utils/helpers"
import { useEffect } from "react"
import { getUserAddress, upsertUserAddress } from "../../../services/api/user"
// import { userAddress } from "../../../@Types/user"
import { isAxiosError } from "axios"

const addressSchema = z.object({
    address1: z.string(),
    address2: z.string(),
    country: z.string(),
    city: z.string(),
    zipCode: z.string()
})

type TAddressSchema = z.infer<typeof addressSchema>

export const useAddress = () => {

    const { handleSubmit, register, reset, setError, formState: { errors, isSubmitting, isDirty, isValid, dirtyFields } } = useForm<TAddressSchema>({
        resolver: zodResolver(addressSchema),
        mode: "onChange",
        // defaultValues: {
        //     address1: undefined, address2: undefined, country: undefined, city: undefined, zipCode: undefined
        // }
    })


    const onSubmit = async (objectData: FieldValues) => {

        // let data: Partial<userAddress> = {}

        // for ( const key in dirtyFields ) {
        //     data[key as keyof typeof data] = objectData[key]
        // }

        try {
            // await upsertUserAddress(data)
            await upsertUserAddress(objectData)

        } catch (error) {
            if (isAxiosError(error) && error.response) {
                const errorMsg = error.response.data.message
                const [, field, fieldErrorMsg] = errorMsg.split('"')
                console.log(error)
                if (field)
                    setError(field, {message: fieldErrorMsg})
                else 
                    setError("root", {message: errorMsg})
            }
            else
                console.log(error)
            reset({} ,{keepErrors: true})
        }
    }

    useEffect(() => {
        const fetchUserAddress = async () => {
            try {
                const userAddress = await getUserAddress()

                if (userAddress) {
                    reset({
                        address1: userAddress.address1,
                        address2: userAddress.address2,
                        country: userAddress.country,
                        city: userAddress.city,
                        zipCode: String(userAddress.zipCode),
                    })
                }
            } catch (error) {
                console.log(error)
            }
        }

        fetchUserAddress()
    }, [])

    return {
        handleSubmit, onSubmit, register, isSubmitting, errors, isDirty, isValid
    }
}