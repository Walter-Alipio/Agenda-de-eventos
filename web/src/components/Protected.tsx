import { Navigate } from "react-router-dom";

interface Props {
  isLogIn: boolean;
  children: JSX.Element;
}

export default function Protected({ isLogIn, children }: Props){

  
  if(!isLogIn){
  
    return <Navigate to={'/'} />
  }

  return  children; 
  
}