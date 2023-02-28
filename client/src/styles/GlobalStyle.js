import { createGlobalStyle } from "styled-components";


export  const GlobalStyle = createGlobalStyle`


*{
  margin: 0px; 
  padding: 0px;
 
}
body{
  /* background-color:rgba(224, 224, 224, 1); */
  background-color: rgb(248,248,255);
  font-size: 50%;


}


.container{
  max-width: 70rem;
  margin: auto;
  /* border: 1px solid rgb(201, 201, 201); */
}

.icon{
  font-size: 1rem;
  cursor: pointer;
}

a{
    text-decoration: none;
    &hover{
        text-decoration: underline;
        
    }
}

ul{
  list-style: none;
}
iframe{
  max-height: 100%;
}

.tost{
    font-size: 1rem;
    z-index: 99999999999999999999999;
}

@media (max-width:600px) {
  .container{
    
    
  }
  
}



`