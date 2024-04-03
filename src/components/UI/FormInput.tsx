import { useState } from "react"
import { UseFormRegisterReturn } from "react-hook-form"

interface IFormInput {
    inputType: 'text' | 'number' | 'email' | 'password'
    label: string,
    disabled?: boolean
    errorMsg?: string
    register?: UseFormRegisterReturn
}

const FormInput = ( {inputType, label, disabled = false, errorMsg='', register}: IFormInput) => {

    const [hasValue, setHasValue] = useState(false)
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        if (register)
            register.onChange(e)

        const value = inputType === 'number' ? parseFloat(e.target.value) : e.target.value

        if (typeof value === 'number')
            setHasValue(value >= 0 ? true : false)
        else
            setHasValue(value ? true : false)
    }

    return (
        <div className="w-full relative">
            <div className={`group relative h-12 w-full flex flex-col ring-1 focus-within:ring-2 ${errorMsg ? 'ring-red-500/50 hover:ring-red-500' : 'ring-slate-400/50 hover:ring-slate-400'} rounded-lg overflow-hidden `}>
                <label className={`absolute pointer-events-none transition-all ease-in-out left-6 top-2 text-lg cursor-text ${hasValue && 'text-xs'} group-focus-within:text-xs group-focus-within:left-6 left-5 text-lg ${errorMsg ? 'text-red-400' : 'text-black/60'} `}>{label}</label>
                <input className={` w-full h-full px-6 rounded-lg placeholder:text-lg focus-within:placeholder-transparent outline-none text-sm ${hasValue && 'pt-4'} pr-6 group-focus-within:pt-4`}
                    type={inputType}
                    disabled={disabled}
                    min={0}
                    {...register}
                    onChange={handleChange}
                />
            </div>
            <h3 className="text-xs pt-1 absolute text-red-500 pl-1">{errorMsg}</h3>
        </div>
    )
}

export default FormInput