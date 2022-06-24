import { FormEvent, FormEventHandler, useState } from "react";
import { Button } from "../components/Button";
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
  function handleEvent(event: FormEvent){
    event.preventDefault();
    events.push({name,date,start,end,description});
    console.log(events);

    clear();
    setIsOpen(true)
  }

  return (
    <>
      <Header />
      <ModalOk 
      setIsOpen={setIsOpen}
      isOpen={isOpen}
      
      />
        <div className="w-full h-screen flex items-center">
        <section className="flex flex-col justify-center p-6 gap-2 w-full mx-4 lg:w-1/3 bg-white rounded-md shadow-md sm:mt-8" >
          <form className="flex flex-col"
            onSubmit={handleEvent}
          >  
            <h1 className="text-sky-800 text-2xl text-center m-3 font-extrabold">Criar Evento</h1>
              <label htmlFor="name" className="text-sm font-bold text-gray-700 mb-2">
                Nome:
              </label>
              <input type="text" placeholder="Nome do evento" name="name" id="name" required value={name}
                onChange={event=>setName(event.target.value)}
                className="text-sm w-full mb-4 pl-3 py-2 rounded border shadow focus:outline-none hover:border-blue-light hover:ring-1 hover:ring-blue-dark focus:border-blue-dark focus:ring-1 focus:ring-blue-dark text-black"
              />

              <label htmlFor="date" className="text-sm font-bold text-gray-700 mb-2">
                Data:
              </label>
              <input type="date" placeholder="Data" name="date" id="date" required value={date}
                onChange={event=>setDate(event.target.value)}
                className="text-sm w-full mb-4 pl-3 py-2 rounded border shadow focus:outline-none hover:border-blue-light hover:ring-1 hover:ring-blue-dark focus:border-blue-dark focus:ring-1 focus:ring-blue-dark text-black"
              />

              <div className="grid grid-cols-2 w-full gap-2">

                <div>
                  <label htmlFor="start" className="text-sm font-bold text-gray-700 mb-2 block">
                    Início:
                  </label>
                  <input type="time" name="start" id="start" required value={start}
                  onChange={event=>setStart(event.target.value)}
                  className="text-sm mb-4 pl-3 py-2 rounded border shadow focus:outline-none hover:border-blue-light hover:ring-1 hover:ring-blue-dark focus:border-blue-dark focus:ring-1 focus:ring-blue-dark text-black w-full"/>
                </div>

                <div>
                  <label htmlFor="end" className="text-sm font-bold text-gray-700 mb-2 block">
                    Termino:
                  </label>
                  <input type="time" name="end" id="end" required value={end}
                  onChange={event=>setEnd(event.target.value)}
                  className="text-sm mb-4 pl-3 py-2 rounded border shadow focus:outline-none hover:border-blue-light hover:ring-1 hover:ring-blue-dark focus:border-blue-dark focus:ring-1 focus:ring-blue-dark text-black w-full "/>
                </div>
              </div>
            <label htmlFor="description"
              className="text-sm font-bold text-gray-700 mb-2">
                Descrição:
              </label>
            <textarea name="" id="description" cols={30} rows={7} maxLength={350} required
             onChange={event=>setDescription(event.target.value)} value={description}
             className='text-sm mb-4 pl-3 p-2 rounded border shadow focus:outline-none hover:border-blue-light hover:ring-1 hover:ring-blue-dark focus:border-blue-dark focus:ring-1 focus:ring-blue-dark text-black resize-none overflow-x-hidden'
             ></textarea>

              <Button>Criar</Button>
          </form>
        </section>
      </div>
   
    </>
  )
}