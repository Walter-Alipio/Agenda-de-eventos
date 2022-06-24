import { EventCard } from "../components/EventCard";
import { Header } from "../components/Header";


const db = [
  {
    name: "Teste 1",
    date:  new Date("2022-06-17"),
    start: "15:36",
    end: "16:36",
    description: "Bla blabla. Comer, treinar, estudar, dormir, comer, estudar, comer, treinar... ",
    id: 1,
  },
  {
    name: "Resolver Algortimo",
    date: new Date("2022-06-17"),
    start: "16:37",
    end: "23:38",
    description: "achar os pássaros",
    id:2,
  },
    {
    name: "Resolver Algortimo",
    date: new Date("2022-06-17"),
    start: "16:37",
    end: "23:38",
    description: "achar os pássaros",
    id:2,
  }
];

export function Events(){
  return (
    <div>
      <Header />
      <section className="mt-12 w-full">    
          <ul className="flex flex-wrap justify-center lg:justify-around">
            {
              db.map(element => {
                return(
                  <li className="mt-3">
                    <EventCard 
                      key={element.id}
                      name={element.name}
                      date={element.date}
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