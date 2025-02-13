import FormInput from "../../components/ui/FormInput"
import useLogin from "./useLogin"
import { AiOutlineLoading } from "react-icons/ai";

const Login = () => {

    const {
        register, handleSubmit, onSubmit, errors, isSubmitting, navigate, isDirty, isValid, autoLogin
    } = useLogin()

    return (
        <main className="min-h-[63dvh] flex justify-center items-center py-10 dark:bg-neutral-900 dark:text-neutral-50">
            <form className="font-primary w-[29rem] flex flex-col gap-y-6" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="font-secondary text-center text-5xl mb-5">Login</h1>
                <FormInput
                    label="email" inputType="email" errorMsg={errors.root ? errors.root.message : errors.email?.message}
                    register={register("email")}
                />
                <FormInput
                    label="password" inputType="password" errorMsg={errors.root ? errors.root.message : errors.password?.message}
                    register={register("password")}
                />
                <label className=" font-secondary hover:underline underline-offset-4 cursor-pointer pt-2">forgot password ?</label>
                <button onClick={autoLogin} type="button" className="w-32 mx-auto px-4 ring rounded ring-black ">Auto Log-in</button>
                <button
                    type="submit" disabled={!isDirty || !isValid || isSubmitting}
                    className=" font-accent w-44 h-12 mx-auto gap-x-2 text-center text-white bg-black hover:bg-black focus:ring-4 focus:outline-none rounded-lg px-5 mt-5 py-3"
                >
                {isSubmitting ?
                    <AiOutlineLoading size={23} className="mx-auto animate-spin text-white" />
                    :
                    <span>Login</span>
                }
                </button>
                <label onClick={() => navigate('/register')} className="font-secondary hover:underline underline-offset-4 text-center cursor-pointer">create account ?</label>
            </form>
        </main>
    )
}

export default Login