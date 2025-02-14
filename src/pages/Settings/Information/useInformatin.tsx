import { DefaultValues, FieldValues, Mode, useForm } from "react-hook-form"
import { ZodSchema } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { IUpdateInformationSchema, IUpdatePasswordSchema, UpdateInformationSchema, UpdatePasswordSchema } from "../../../schema/userInformation"
import { userContext } from "../../../Contexts/userContext"
import { useContext } from "react"
import { updateUserInformation, updateUserPassword } from "../../../services/api/user"
import { userType } from "../../../@Types/user"
import { isAxiosError } from "axios"


const useInformation = () => {

    const { user, handleUpdateUser } = useContext(userContext)

    const registerForm = <TSchema extends FieldValues>(schema: ZodSchema, mode: Mode, _defaultValues: DefaultValues<TSchema> | undefined = undefined) => {
        return useForm<TSchema>({
            mode: mode,
            resolver: zodResolver(schema),
            // defaultValues: defaultValues,
        })
    }

    const forms = {
        information: registerForm<IUpdateInformationSchema>(UpdateInformationSchema, "onChange", {
            firstname: user?.firstname,
            lastname: user?.lastname,
            email: user?.email
        }),
        password: registerForm<IUpdatePasswordSchema>(UpdatePasswordSchema, "onChange")
    }

    const onInformationFormSubmit = async (objectData: FieldValues) => {

        const { dirtyFields } = forms.information.formState

        let data: Partial<userType> = {}

        for ( const key in dirtyFields ) {
            data[key as keyof typeof data] = objectData[key]
        }

        try {
            const updatedData = await updateUserInformation(data)
            handleUpdateUser(updatedData)
            // forms.information.reset()

        } catch (error) {
            if (isAxiosError(error) && error.response) {
                const errorMsg = error.response.data.message
                console.log(errorMsg)
                const [, field, fieldErrorMsg] = errorMsg.split('"')
                if (field)
                    forms.information.setError(field, {message: fieldErrorMsg})
                else 
                    forms.information.setError("root", {message: errorMsg})
            }
            else
                console.log(error)
            forms.information.reset({} ,{keepErrors: true})
        }
    }

    const onPasswordFormSubmit = async (objectData: FieldValues) => {

        try {
            await updateUserPassword(objectData)

        } catch (error) {
            if (isAxiosError(error) && error.response) {
                const errorMsg = error.response.data.message
                console.log(errorMsg.split('"'))
                const [, field, fieldErrorMsg] = errorMsg.split('"')
                if (field)
                    forms.password.setError(field, {message: fieldErrorMsg})
                else 
                    forms.password.setError("root", {message: errorMsg})
            }
            else
                console.log(error)
            forms.password.reset({} ,{keepErrors: true})
        }
    }

    return {
        forms, onInformationFormSubmit, onPasswordFormSubmit
    }
}

export default useInformation