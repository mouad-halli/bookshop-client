import { useContext } from "react"
import useInformation from "./useInformatin"
import { userContext } from "../../../Contexts/userContext"

const Information = () => {

    const {
        forms, onInformationFormSubmit, onPasswordFormSubmit
    } = useInformation()

    const { user } = useContext(userContext)

    const informationFormErrors = forms.information.formState.errors
    const passwordFormErrors = forms.password.formState.errors

    return (
        <div className="">
            <h1 className="text-xl font-semibold font-Archivo pb-4 pl-4">Information</h1>
            <div className="flex flex-col border p-5 gap-y-6">
                <form onSubmit={forms.information.handleSubmit(onInformationFormSubmit)} className="flex flex-col gap-y-1">
                    <div className="flex gap-x-1 items-center truncate">
                        <span className="text-gray-500">Firstname</span>
                        {informationFormErrors.firstname &&
                            <span className="text-red-500 text-xs">{`(${informationFormErrors.firstname.message})`}</span>
                        }
                    </div>
                    <input
                        type="text" {...forms.information.register("firstname", { value: user?.firstname })}
                        className="border outline-none py-1.5 px-4"
                    />
                    <div className="flex gap-x-1 items-center truncate pt-3">
                        <span className="text-gray-500">Lastname</span>
                        {informationFormErrors.lastname &&
                            <span className="text-red-500 text-xs">{`(${informationFormErrors.lastname.message})`}</span>
                        }
                    </div>
                    <input
                        type="text" {...forms.information.register("lastname", { value: user?.lastname })}
                        className="border outline-none py-1.5 px-4"
                    />
                    <div className="flex gap-x-1 items-center truncate pt-3">
                        <span className="text-gray-500">Email</span>
                        {informationFormErrors.email &&
                            <span className="text-red-500 text-xs">{`(${informationFormErrors.email.message})`}</span>
                        }
                    </div>
                    <input
                        type="email" {...forms.information.register("email", { value: user?.email })}
                        className="border outline-none py-1.5 px-4"
                    />
                    <button
                        type="submit" disabled={ !forms.information.formState.isDirty || forms.information.formState.isSubmitting}
                        className="py-2.5 border md:w-min px-8 mt-4 border-indigo-600 text-indigo-700"
                    >
                        {forms.information.formState.isSubmitting ? "saving ..." : "save"}
                    </button>
                </form>
                <div className="flex flex-col gap-y-2">
                    <span className="text-gray-500">Password</span>
                    <form onSubmit={forms.password.handleSubmit(onPasswordFormSubmit)} className="flex flex-col gap-y-6 mb-1">
                        <div className="relative ">
                            <input
                                placeholder="Current password" type="password" className="w-full border outline-none py-2 px-4"
                                {...forms.password.register("currentPassword")}
                            />
                            {passwordFormErrors.currentPassword &&
                                <span className="text-red-500 text-xs absolute left-0 -bottom-5">{`(${passwordFormErrors.currentPassword.message})`}</span>
                            }
                        </div>
                        <div className="relative ">
                            <input
                                placeholder="New password" type="password" className="w-full border outline-none py-2 px-4" 
                                {...forms.password.register("newPassword")}
                            />
                            {passwordFormErrors.newPassword &&
                                <span className="text-red-500 text-xs absolute left-0 -bottom-5">{`(${passwordFormErrors.newPassword.message})`}</span>
                            }
                        </div>
                        <div className="relative ">
                            <input
                                placeholder="Confirm new password" type="password" className="w-full border outline-none py-2 px-4"
                                {...forms.password.register("passwordConfirmation")}
                            />
                            {passwordFormErrors.passwordConfirmation &&
                                <span className="text-red-500 text-xs absolute left-0 -bottom-5">{`(${passwordFormErrors.passwordConfirmation.message})`}</span>
                            }
                        </div>
                        <button
                            type="submit" disabled={ !forms.password.formState.isDirty || !forms.password.formState.isValid || forms.password.formState.isSubmitting}
                            className="py-2.5 border mt-4 border-indigo-600 text-indigo-700"
                        >
                            Change password
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Information