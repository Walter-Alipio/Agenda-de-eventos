import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export interface Props {
  setIsLogin:  React.Dispatch<React.SetStateAction<boolean>>
}

export default function Home({ setIsLogin }: Props){
  return (
    <>
    <Header setIsLogin={setIsLogin}/>
    
    <Outlet />
    </>
  );
}