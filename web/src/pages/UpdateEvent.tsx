import { FormEvent, useEffect, useState } from "react";
import { BackButton } from "../components/BackButton";
import { CreateEventForm } from "../components/forms/CreateEventForm";
import { Header } from "../components/Header";
import ModalOk from "../components/ModalOk";
import { format } from "date-fns";

import { useNavigate, useParams} from 'react-router-dom';
import DataUser from "../auth/dataUser";
import axios from 'axios';


export function UpdateEvent(){
  const navigate = useNavigate();

  const [name,setName] = useState('');
  const [date,setDate] = useState('');
  const [start,setStart] = useState('');
  const [end,setEnd] = useState('');
  const [description,setDescription] = useState('');

  const [isOpen, setIsOpen] = useState(false)

  let { ID } = useParams();

  useEffect(()=>{
   if(ID !== undefined) {

    axios({
    method: 'get',
    url:'http://localhost:3333/events/'+ID ,
    headers: {
           Authorization: "Bearer " + DataUser.getToken()
             }
     })
     .then((res)=> {
      console.log(res.status)
      const data = res.data;
      
      const [dateFormat] = data.date.toString().match(/(\d{4}-\d{2}-\d{2})/)
      setName(data.name);
      setDate(dateFormat);
      setStart(data.start);
      setEnd(data.end);
      setDescription(data.description);   
    })
    .catch(err=>console.log(err))
   }},[])
  
  async function handleEvent(event: FormEvent){
  event.preventDefault();

    axios({
      method: 'put',
      url:'http://localhost:3333/events/'+ID ,
      headers: {
      Authorization: "Bearer " + DataUser.getToken()
         },
      data:{ 
        name: name,
        date: date,
        start: start,
        end: end,
        description: description
       } 
    })
    .then((res)=>{
      console.log(res.status);
      setIsOpen(true);
      console.log(date)
      // if(!isOpen){
      //   navigate('/home');
      // }
    })
    .catch((err)=>console.log(err))
  }

  return (
    <>
      <Header />
      <ModalOk 
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
      <BackButton href={"/home"} />
        <div className="w-full h-screen flex flex-col items-center px-6">
        <h1 className="text-4xl mt-11 mb-8 font-extrabold text-sky-900"> Editar evento</h1>

        <section className="flex flex-col justify-center p-6 gap-2 w-full mx-4 max-w-[440px] bg-white rounded-md shadow-md " >

         <CreateEventForm 
              setName={setName}
              setDate={setDate}
              setStart={setStart}
              setEnd={setEnd}
              setDescription={setDescription}

              name={ name}
              date={ date}
              start={start}
              end={  end}
              description={description}

              handleEvent={handleEvent}
                  />
        </section>
      </div>
   
    </>
  )
}