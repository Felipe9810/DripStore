import ProductSection from "../assets/components/ProductSection.jsx";
import Slide from "../assets/components/Slide.jsx";
import { useSearchParams } from "react";
function Home() {
    return(
        <>
            <ProductSection />
            <Slide imgs={lista} width={500} temporizador={0.5} showIndince />
        </>
    )
}

export default Home