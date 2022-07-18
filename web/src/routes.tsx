import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Protected from "./components/Protected";
import { CreateEvent } from "./pages/CreateEvent";
import { Events } from "./pages/Events";
import { Login } from "./pages/Login";
import { NewUser } from "./pages/NewUser";
import { UpdateEvent } from "./pages/UpdateEvent";


export function Router(){
  const [isLogIn, setIsLogIn] = useState(false);
  return (
    <Routes>
      <Route path="/" element={<Login setIsLogin={setIsLogIn} />}/>
      <Route path="/newUser" element={<NewUser />}/>

      <Route path="/home" element={ 
        <Protected isLogIn={isLogIn}>
          <Home setIsLogin={setIsLogIn}/>
        </Protected>
      }> 
        <Route index element={ <Events />     } />
        <Route path="newEvent" element={<CreateEvent />}/>
        <Route path="updateEvent/:ID" element={<UpdateEvent />}/>
      </Route>
    </Routes>
  );
}