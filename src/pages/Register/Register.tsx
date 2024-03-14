import { Link } from "react-router-dom"
import FormInput from "../../components/UI/FormInput"
import useRegister from "./useRegister"
import { AiOutlineLoading } from "react-icons/ai";

const Register = () => {

    const { 
        register, handleSubmit, errors, isSubmitting, onSubmit, isValid, isDirty
    } = useRegister()

    return (    
        <main className="min-h-[61dvh] flex justify-center items-center py-10">
            <form onSubmit={handleSubmit(onSubmit)} className="w-[29rem] flex flex-col gap-y-6">
                <h1 className="text-center text-5xl mb-5 font-Archivo">Create account</h1>
                <FormInput
                    label="firstname" inputType="text" errorMsg={errors.firstname?.message}
                    register={register("firstname")}
                />
                <FormInput
                    label="lastname" inputType="text" errorMsg={errors.lastname?.message}
                    register={register("lastname")}
                />
                <FormInput
                    label="email" inputType="email" errorMsg={errors.email?.message}
                    register={register("email")}
                />
                <div className="w-full flex gap-x-2">
                    <FormInput
                        label="password" inputType="password" errorMsg={errors.password?.message}
                        register={register("password")}
                    />
                    <FormInput
                        label="confirm password" inputType="password" errorMsg={errors.passwordConfirmation?.message}
                        register={register("passwordConfirmation")}
                    />
                </div>
                <button
                    className="w-44 h-12 mx-auto gap-x-2 text-center text-white bg-black hover:bg-black focus:ring-4 focus:outline-none rounded-lg px-5 mt-5 py-3"
                    type="submit" disabled={!isDirty || !isValid || isSubmitting}
                    >
                {isSubmitting ?
                    <AiOutlineLoading size={23} className="mx-auto animate-spin text-white" />
                    :
                    <span>Register</span>
                }
                </button>
                <Link to='/login' className="hover:underline underline-offset-4 text-center cursor-pointer">Login ?</Link>
          </form>
      </main>
    )
}

export default Register