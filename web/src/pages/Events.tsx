import { EventCard } from "../components/EventCard";
import { Header } from "../components/Header";
import axios from 'axios'
import { useEffect, useState } from "react";
import DataUser from "../auth/dataUser";
import { CalendarCheck } from "phosphor-react";

interface dataType{
  _id: string,
  date: string,
  description: string,
  end: string,
  name: string,
  start: string,
}

export function Events(){

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

  return (
    <div>
      <Header />
      <section className="mt-12 w-full"> 
      <div className="w-full flex justify-center">
        <a href="/newEvent" className="flex items-center gap-2 font-extrabold"><CalendarCheck />Criar evento</a>
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
                      date={new Date(element.date)}
                      start={element.start}
                      end={element.end}
                      description={element.description}
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