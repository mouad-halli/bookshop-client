import { FieldValues, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { register as API_Register } from "../../services/api/authentication";import { useNavigate } from "react-router-dom";
import { isAxiosError } from "axios";
import { TRegisterFormSchema, registerFormSchema } from "../../schema/authentication";

const useRegister = () => {

    const navigate = useNavigate()

    const {
        register, handleSubmit, reset, setError,
        formState: { errors, isSubmitting, isValid, isDirty } 
    } = useForm<TRegisterFormSchema>({
        mode: 'onChange',
        resolver: zodResolver(registerFormSchema)
    })

    const onSubmit = async (data: FieldValues) => {
        try {
            await API_Register(data)
            reset()
            navigate('/login')
        } catch (error) {
            if (isAxiosError(error) && error.response) {
                const [, field, msg] = error.response.data.message.split('"')
                setError(field, { message: msg })
                console.log(error.response.data)
            }
            else
                console.log(error)
        }
    }

    return {
        register, handleSubmit, errors, isSubmitting, onSubmit, isValid, isDirty
    }
}

export default useRegister