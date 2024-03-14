import FormInput from "../../components/UI/FormInput"
import useLogin from "./useLogin"
import { AiOutlineLoading } from "react-icons/ai";

const Login = () => {

    const {
        register, handleSubmit, onSubmit, errors, isSubmitting, navigate, isDirty, isValid
    } = useLogin()

    return (
        <main className="min-h-[61dvh] flex justify-center items-center py-10">
            <form className="w-[29rem] flex flex-col gap-y-6" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-center text-5xl mb-5 font-Archivo">Login</h1>
                <FormInput
                    label="email" inputType="email" errorMsg={errors.root ? errors.root.message : errors.email?.message}
                    register={register("email")}
                />
                <FormInput
                    label="password" inputType="password" errorMsg={errors.root ? errors.root.message : errors.password?.message}
                    register={register("password")}
                />
                <label className="hover:underline underline-offset-4 cursor-pointer pt-2">forgot password ?</label>
                <button
                    type="submit" disabled={!isDirty || !isValid || isSubmitting}
                    className="w-44 h-12 mx-auto gap-x-2 text-center text-white bg-black hover:bg-black focus:ring-4 focus:outline-none rounded-lg px-5 mt-5 py-3"
                >
                {isSubmitting ?
                    <AiOutlineLoading size={23} className="mx-auto animate-spin text-white" />
                    :
                    <span>Login</span>
                }
                </button>
                <label onClick={() => navigate('/register')} className="hover:underline underline-offset-4 text-center cursor-pointer">create account ?</label>
            </form>
        </main>
    )
}

export default Login