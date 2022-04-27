import React from 'react'

function CouldNotFind() {
    const textStyling = {
        marginTop: "20px",
        fontSize: "33px",
        textAlign: "center",
        color: "#3F3D56",
        fontWeight: "550",
        marginBottom: "25px"
    }
  return (
    <div>
        <h3 style={textStyling}>Could not find what you were looking for?</h3>
    </div>
  )
}

export default CouldNotFind