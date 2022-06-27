import { FormEvent, useState } from "react";
import { BackButton } from "../components/BackButton";
import { CreateEventForm } from "../components/forms/CreateEventForm";
import { Header } from "../components/Header";
import ModalOk from "../components/ModalOk";



const events = new Array();

export function CreateEvent(){
  const [name,setName] = useState('');
  const [date,setDate] = useState('');
  const [start,setStart] = useState('');
  const [end,setEnd] = useState('');
  const [description,setDescription] = useState('');

  let [isOpen, setIsOpen] = useState(false)

  function clear(){
    setName('')
    setDate('')
    setStart('')
    setEnd('')
    setDescription('')
  }

  let message = ' ';
  function handleEvent(event: FormEvent){
    event.preventDefault();
    events.push({name,date,start,end,description});
    console.log(events);
    message = 'Criado com sucesso!';
    clear();
    setIsOpen(true)
  }

  return (
    <>
      <Header />
      <ModalOk 
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        message = {message}
      />
      <BackButton href={"#"} />
        <div className="w-full h-screen flex flex-col items-center px-6">
        <h1 className="text-4xl mt-11 mb-8 font-extrabold text-sky-900"> Criar evento</h1>

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