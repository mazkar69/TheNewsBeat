import React from 'react'
import styled from 'styled-components'

const Spinner = () => {
    return (
        <Div>
            <div
                className="lds-dual-ring">
            </div>
        </Div>
    )
}

const Div = styled.div`

.lds-dual-ring {
  display: inline-block;
  /* width: 80px; */
  /* border: 1px solid red; */
  /* height: 80px; */
}
.lds-dual-ring:after {
    content: " ";
  display: block;
  width: 24px;
  height: 24px;
  /* margin: 8px; */
  border-radius: 50%;
  border: 3px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

`

export default Spinner