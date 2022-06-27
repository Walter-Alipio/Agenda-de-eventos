import { EventCard } from "../components/EventCard";
import { Header } from "../components/Header";
import axios from 'axios'
import { useEffect } from "react";
import DataUser from "../auth/dataUser";

interface dataType{
  id: string,
  date: string,
  description: string,
  end: string,
  name: string,
  start: string,
}

let db: dataType[];
const res = async ()=>{

 await axios.get('http://localhost:3333/events', {
    headers: {
      Authorization: "Bearer " + DataUser.getToken()
    }
  })
  .then((response)=>{
    db = [...response.data]
  })
  .catch((error)=>{
    console.log(error)
  })
}
res()

export function Events(){
  return (
    <div>
      <Header />
      <section className="mt-12 w-full">    
          <ul className="flex flex-wrap justify-center gap-7 lg:justify-around lg:max-w-7xl mx-auto">
            {
              db.map(element => {
                return(
                  <li className="mt-3">
                    <EventCard 
                      key={element.id}
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