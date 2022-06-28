import { format } from 'date-fns'
import { useState } from 'react';
import {Link, Pencil, Trash, XCircle} from 'phosphor-react'
 
interface Card{
  id: string,
  name: string;
  date: Date;
  start: string;
  end: string;
  description: string;
}

export function EventCard({id,name,date,start,end, description}: Card){
  const dayEvent = format(date, "d");
  const month = format(date,"MMM");

  const [activeButton, setActiveButton] = useState(false);

  return (
    <section className="w-72 rounded-md m-3 lg:w-96 ">
      <header className="bg-sky-900 overflow-visible flex items-center rounded-t-md h-10 text-white">

        <span 
          className='text-4xl p-2 rounded-lg bg-orange-500 absolute'>
          {dayEvent}
        </span>
        <span className='ml-16 text-lg'>
          {month}
        </span>
        <span className='mr-2 ml-auto flex gap-8 '>
          <a href={`/updateEvent/${id}`}>
            <Pencil size={24} alt='Editar' 
                className='hover:animate-pulse hover:text-yellow-400 transition-colors' />
          </a>
          <a href ={'#'}><Trash size={24} weight='bold' alt='Excluir' 
                className='hover:animate-pulse hover:text-red-400 transition-colors'/> 
          </a>
        </span>

      </header>

      <body className='bg-sky-50 rounded-b-md pt-3 flex flex-col group overflow-hidden'>
        <button className='text-center text-lg font-bold  w-full '
          onClick = {() => activeButton ? setActiveButton(false) : setActiveButton(true)}  
        >
          {name}
        </button>
        <section className={`${ activeButton ? 'block' : 'hidden'}`}>
          <header className='flex justify-between p-2 text-white mx-2 rounded-md text-base'>

            <span className='bg-green-700 rounded p-2'>Início: <span className='font-bold'>{start}</span></span>
            <span className='bg-red-600 rounded p-2'>Termino: <span className='font-bold'>{end}</span></span>

          </header>
          
          <p className={`text-lg text-center mt-3  bg-white px-2`}>
            {description}
          </p>
        </section>
      </body>

    </section>
  )
}