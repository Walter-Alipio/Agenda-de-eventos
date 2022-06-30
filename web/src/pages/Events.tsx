import { EventCard } from "../components/EventCard";
import { Header } from "../components/Header";
import axios from 'axios'
import { useEffect, useState } from "react";
import DataUser from "../auth/dataUser";
import { CalendarCheck } from "phosphor-react";
import ModalDelete from "../components/modal/ModalDelete";

interface dataType{
  _id: string,
  date: string,
  description: string,
  end: string,
  name: string,
  start: string,
}

export function Events(){
 
//controle da modal
  let [isOpen, setIsOpen] = useState(false);
  let [exclude, setExclude] = useState(false);
  let [id,setId] = useState(' ')
//recarrega a tela após excluir um elementos
  if(exclude) window.location.reload();

  const [db,SetDb] = useState<dataType[]>([])
  async function render(){
    await axios.get('http://localhost:3333/events', {
      headers: {
        Authorization: "Bearer " + DataUser.getToken()
      }
    })
    .then(response => SetDb(response.data))
    .catch((error)=>{
      console.log(error)
    })
   
  }
  useEffect(()=>{
    render();
  },[])
//ordena a exibição por data do evento
  function compare( a: dataType, b: dataType ) {
  if ( a.date < b.date ){
    return -1;
  }
  if ( a.date > b.date ){
    return 1;
  }
  return 0;
}
db.sort( compare );

  console.log(db)
  return (
    <div>
      <Header />
      <ModalDelete 
        setIsOpen={setIsOpen}
        setExclude={setExclude}
        isOpen={isOpen}
        message={ "O evento será completamente excluído!" }  
        id={id}
      />
      <section className="mt-12 w-full"> 
      <div className="w-full flex justify-center">
        <a href="/newEvent" className="flex items-center gap-2 font-extrabold bg-sky-100 rounded-2xl py-2 px-4 shadow-lg hover:bg-sky-200"
        ><CalendarCheck />Criar evento</a>
      </div>   
          <ul className="flex flex-wrap justify-center gap-7 lg:justify-around max-w-[1100px] mx-auto">
            {
              db.map(element => {
        
                return(
                  <li className="mt-3">
                    <EventCard 
                      key={element._id}
                      id={element._id}
                      name={element.name}
                      date={ element.date}
                      start={element.start}
                      end={element.end}
                      description={element.description}
                      setIsOpen={setIsOpen}
                      setId={setId}
                    />  
                  </li>
                )
              })
            }
          </ul>
      </section>
    </div>
  )
}