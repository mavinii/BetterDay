import { InputHTMLAttributes } from "react" 

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InputProps) {
    return (
        <input
        {...props}
        className="border-2 border-gray-300 rounded-md bg-zinc-800 py-3 px-3 text-white"
      />
    )
}