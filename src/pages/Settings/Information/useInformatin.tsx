import { DefaultValues, FieldValues, Mode, useForm } from "react-hook-form"
import { ZodSchema } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { IUpdateInformationSchema, IUpdatePasswordSchema, UpdateInformationSchema, UpdatePasswordSchema } from "../../../schema/userInformation"
import { userContext } from "../../../Contexts/userContext"
import { useContext } from "react"
import { updateUserInformation } from "../../../services/api/user"
import { userType } from "../../../@Types/user"


const useInformation = () => {

    const { user, handleUpdateUser } = useContext(userContext)

    const registerForm = <TSchema extends FieldValues>(schema: ZodSchema, mode: Mode, defaultValues: DefaultValues<TSchema> | undefined = undefined) => {
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

        console.log(data)

        try {
            const updatedData = await updateUserInformation(data)
            handleUpdateUser(updatedData)
            // forms.information.reset()

        } catch (error) {
            console.log(error)
        }
    }

    const onPasswordFormSubmit = async (objectData: FieldValues) => {

        // objectData = turnEmptyObjectValuesToUndefined(objectData)

        try {

            // await updateUser(objectData)
            console.log(objectData)

        } catch (error) {
            console.log(error)
        }
    }

    return {
        forms, onInformationFormSubmit, onPasswordFormSubmit
    }
}

export default useInformation