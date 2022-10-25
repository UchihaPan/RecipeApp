import { useContext } from "react";

import {Themecontext} from "../context/Themecontext";




export default function useTheme(){

    const theme=useContext(Themecontext)

    if(theme===undefined){
        throw new Error('something is wrong')
    }

    return theme

}