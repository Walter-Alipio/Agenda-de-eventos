import { FormEvent, useEffect, useState } from "react";
import { BackButton } from "../components/BackButton";
import { CreateEventForm } from "../components/forms/CreateEventForm";
import ModalOk from "../components/modal/ModalOk";

import { useParams} from 'react-router-dom';
import DataUser from "../auth/dataUser";
import axios from 'axios';


export function UpdateEvent(){

  const [name,setName] = useState('');
  const [date,setDate] = useState('');
  const [start,setStart] = useState('');
  const [end,setEnd] = useState('');
  const [description,setDescription] = useState('');

  const [isOpen, setIsOpen] = useState(false)

  let { ID } = useParams();
//puxa os dados do evento que será editado
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
    .catch(err=>{
      console.log(err)
    })
   }},[])
//envia os dados para API  
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
    })
    .catch((err)=>console.log(err))
  }

  return (
    <>
      <ModalOk 
        setIsOpen={setIsOpen}
        isOpen={isOpen}
          message={ "Alterado com sucesso!" }  
          buttonText={'Voltar'} 
      />
      <BackButton />
        <div className="w-full h-[calc(100vh-4rem)] flex flex-col items-center px-6">
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