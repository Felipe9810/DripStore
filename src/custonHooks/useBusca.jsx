import {creatContext, useState, useContext} from "react";

const TermoBusca = creatContext(null);

function useBusca({children}) {
      
    const [busca, setBusca] = useState("")
    return(
        <>
            <TermoBusca value={{busca, setBusca}} > 
                {children}
            </TermoBusca>
        </>
    )
}

export
    {useBusca,
    TermoBusca
}