import { useCallback, useState } from "react";

export const useToggle = (init:Boolean = false)=>{
    const [state,setState] = useState(init);

    const toggle = useCallback(() => {
     setState(prev=> !prev);
    },[])
    
    return {state,toggle}
}