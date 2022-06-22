//2 clse udemy
import React from 'react'
import Proptypes from 'prop-types'
const PrimerApp = ({saludo,subtitulo}) => {
    return (
    <>
    <h1>{saludo}</h1>
    <h2>{subtitulo}</h2>
 
    </>)
    
}

PrimerApp.propTypes={
    saludo: Proptypes.string.isRequired
}
PrimerApp.defaultProps={
    subtitulo: 'bye'
}

export default PrimerApp;