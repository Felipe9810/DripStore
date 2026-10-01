import {useContext} from "react"
import {TermoBusca} from "../custonHooks/useBusca.jsx"
import { navigate } from "react-router-dom"

function InputHeader() {
    const {busca, setBusca} = useContext(TermoBusca)
    const navigate = useNavigate()
    return (
        <>
            <form onSubmit={() => navigate(`product-list`)} >
            <Input type="text" className=" bg-gray-200" value={busca} onInput={(e) => {setBusca(e.target.value)}} />
            <button>E</button>
            <Input id="" /> 
            </form>
        </>
        
    )
}

export default InputHeader