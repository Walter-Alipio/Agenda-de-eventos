import { Route, Routes } from "react-router-dom";
import { CreateEvent } from "./pages/CreateEvent";
import { Events } from "./pages/Events";
import { Login } from "./pages/Login";
import { NewUser } from "./pages/NewUser";
import { UpdateEvent } from "./pages/UpdateEvent";


export function Router(){
  return (
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/newUser" element={<NewUser />}/>
      <Route path="/home" element={<Events />}/>
      <Route path="/newEvent" element={<CreateEvent />}/>
      <Route path="/newEvent/:ID" element={<UpdateEvent />}/>
    </Routes>
  );
}