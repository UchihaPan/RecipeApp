import { createContext ,useReducer} from "react";



export const Themecontext=createContext()


const themereducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_COLOR":
        return  {
            ...state,color:action.payload
        }
      default:
        return state;
    }
  };


export default function ThemProvider({children}){
    const initialstate={
      color:'blue',
        count:1
    }


    const [state, dispatch] = useReducer(themereducer, initialstate)


    const  color_change=(color)=>{
        dispatch({type:'CHANGE_COLOR',payload:color})
    }




    

    return (
        <Themecontext.Provider value={{...state,color_change}}>
        {children}
        </Themecontext.Provider>
    )
}