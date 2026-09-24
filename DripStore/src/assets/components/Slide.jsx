import { useEffect, useRef, useState } from "react";

function Slide({imgs, width, temporizador, showIndince}) {
  const container = useRef(null);
  const [containerLargura, setContainerLargura] = useState(0);
  const [transitionTime, setTransitionTime] = useState(temporizador );
  const [indiceAtivo, setIndiceAtivo] = useState(1);

  const innerImgs = imgs
  const elementos = [];
  const ultimoElemento = [...imgs].pop();
  const primeiroElemento = [...imgs].shift();
  innerImgs.push(primeiroElemento);
  innerImgs.unshift(ultimoElemento);

  for (let i = 0; i < imgs.length; i++) {
    elementos.push(<img key={i} id={i} src={innerImgs[i]} style={{minWidth: width}} className="teste h-50 bg-red-700 border flex justify-center items-center text-[36px]"/>);
  }

  useEffect(() => {
    setContainerLargura(container.current.offsetWidth);
    const leftButton = container.current.querySelector("#left")
    const rightButton = container.current.querySelector("#right")
    leftButton.removeAttibute("disabled")
    rightButton.removeAttibute("disabled")


    if(indiceAtivo < 1) {
        leftButton.setAttibute("disable" )
        const timer = setTimeout(() => {
            setTransitionTime(0);
            setIndiceAtivo(3)
        }, 500,)

        return () => {
            clearTimeout(timer)
        }
    }

    if(indiceAtivo > innerImgs.legth - 2){
        
    }
  }, [container, indiceAtivo]);

  const moveSlide = (sentido) => {
    if (sentido === "esquerda") {
      setIndiceAtivo((prev) => prev - 1);
    }

    if (sentido === "direita") {
      setIndiceAtivo((prev) => prev + 1);
    }
  };

  
  return (
    <>
      <div ref={container} style={{width: width}} className="overflow-hidden h-50 relative">
        <div className={`flex absolute`}style={{ left: `-${0}px`, transitionDuration: `${transitionTime}s` }}>
          {elementos}
        </div>
        <button id="left" className="w-[15%] h-50 absolute left-0"onClick={() => moveSlide("esquerda")}></button>
        <button id="right" className="w-[15%] h-50 absolute right-0"onClick={() => moveSlide("direita")}></button>
      </div>
      {showIndince}
      <div>
        {img.maps((items, i ) => <div key={i} id={i+1} className={'h-2 w-2 rounded ${indiceAtivo === i+1 && "bg-red-600"}'}></div>)}
      </div>
    </>
  );
}

export default Slide;
