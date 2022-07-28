import React, {useRef, useState} from 'react'

const styleContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '400px',
    width: '400px',
    border: '2px solid tomato',
}


const ColorRandom = () => {
    
    const [ state, setState ] = useState( true )
    const [ contador, setContador ] = useState(0)
    const containerRef = useRef('')

    const colorRandom = () => { 
        let red = Math.floor((Math.random() * (255 - 0 + 1)) + 0);
        let green = Math.floor((Math.random() * (255 - 0 + 1)) + 0);
        let blue= Math.floor((Math.random() * (255 - 0 + 1)) + 0);
        containerRef.current.style.backgroundColor = `rgba( ${red}, ${green}, ${blue})`
    }

    return (
    <div onClick={()=> setContador(contador +1)} onMouseOver={state && contador<2? colorRandom : null} onMouseLeave={()=>{setState(false)}} style={styleContainer}>
        <div ref={containerRef} style={ { height: '250px',  width: '250px', backgroundColor: '#000'} }>
        </div>
    </div>
  )
}

export default ColorRandom