import { useState } from "react"

function Input({htmlFor, type, label, required, placeholder, valor, readOnly, onChange}) {
    
    const [inputValue, setInputValue] = useState("")

    function handleValue(e){
        if(onChange){
            onChange(e.target.value)
        } else{
            setInputValue(e.target.value)
        }
    }

    return (    
    <>   
        <label className="flex flex-col text-[12px]" htmlFor={htmlFor}>
            {label}{required && " * "}
             <input name={htmlFor} readOnly={readOnly} onChange={(e)=>{handleValue(e)}} className="bg-[#4747471f] rounded text-[16px]" type={type} required={required} placeholder={placeholder}  value={valor}/>
        </label>

    </>
    )
}

export default Input;
