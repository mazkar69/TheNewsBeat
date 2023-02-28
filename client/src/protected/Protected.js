import React from 'react'

const Protected = ({ children }) => {
  const auth = sessionStorage.getItem('x4976gtylCC');

  if (auth) {
    return (
      <h1>{children}</h1>
    )

  } else{
    return(
      <h1>404 page not found1</h1>
    )
  }

}

export default Protected;