//Keep track of state.

import { useState } from "react";
import { createContext, useReducer,useContext } from "react";
const AppContext = createContext();


const reducer = (state,action)=>{
    
    switch (action.type) {
        case 'SHOW':
            return (1);
            break;
        case 'HIDE':   
            return (0);
        default:
            return (state);
            break;
    }
}

const initalState = 0;

const AppProvider = ({children})=>{

const [state,dispatch] = useReducer(reducer,initalState);
const [progress,setProgress] = useState(0);
const [showSearch,setShowSearch] = useState(false);

const show = ()=>{
    dispatch({type:"SHOW"})
}

const hide = ()=>{
    dispatch({type:"HIDE"})
}

return <AppContext.Provider value={{state,show,hide,progress,setProgress,showSearch,setShowSearch}}>{children}</AppContext.Provider>


}

export const useGlobalContext = ()=>{
    return useContext(AppContext);
}

export default AppProvider;