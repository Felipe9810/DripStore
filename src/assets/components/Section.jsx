import Card from "./Card"
import Tenis from "./Tenis.svg"

function Section({titulo, children}) {
  return (
    <>
        <h2>{titulo}</h2>
          {children}
      </>
   )
}

export default Section
