import { Button } from "../components/Button";
import { FormEvent, useState } from "react";
import { BackButton } from "../components/BackButton";
import axios from 'axios'
import ModalOk from "../components/modal/ModalOk";


export function NewUser(){

 
  const [name,setName] = useState(' ');
  const [email,setEmail] = useState(' ');
  const [password,setPassword] = useState(' ');

   const [isOpen, setIsOpen] = useState(false)


//Envia os dados para API e volta para pagina de login
  async function handleEvent(event: FormEvent){
    event.preventDefault();

    await axios.post('http://localhost:3333/register',{
      name: name,
      email: email,
      password: password
    })
    .then((response)=>{
      console.log(response)
     setIsOpen(true)
    })
    .catch(err=>console.log(err))
    
   // /register
  }
  return (
    <>
    <ModalOk 
      setIsOpen={setIsOpen}
      isOpen={isOpen}
      url={'/'} 
      message={ "Usuário criado com sucesso!" }  
      buttonText={'Voltar ao Login'} 
    />
    <BackButton href={"/"} />
    <div className="w-full h-screen flex flex-col items-center px-6">
      <h1 className="text-4xl mt-11 mb-8 font-extrabold text-sky-900"> Criar Login</h1>
      <section className="flex flex-col justify-center p-6 gap-2 w-full mx-8 max-w-[440px]  bg-white rounded-md shadow-md" >
        <form 
          className="flex flex-col"
          onSubmit={handleEvent}
        >
            <label htmlFor="name" className="text-sm font-bold text-gray-700 mb-2">
              Nome:
            </label>
            <input type="text" placeholder="Digite seu nome" name="name" id="name" required
              onChange={element=>setName(element.target.value)}
              className="text-sm w-full mb-4 pl-3 py-2 rounded border shadow focus:outline-none hover:border-blue-light hover:ring-1 hover:ring-blue-dark focus:border-blue-dark focus:ring-1 focus:ring-blue-dark text-black"
            />

            <label htmlFor="email" className="text-sm font-bold text-gray-700 mb-2">
              E-mail
            </label>
            <input type="email" placeholder="Digite seu e-mail" name="email" id="email" required
              onChange={element=>setEmail(element.target.value)}
              className="text-sm w-full mb-4 pl-3 py-2 rounded border shadow focus:outline-none hover:border-blue-light hover:ring-1 hover:ring-blue-dark focus:border-blue-dark focus:ring-1 focus:ring-blue-dark text-black"
            />

            <label htmlFor="password" className="text-sm font-bold text-gray-700 mb-2">Senha</label>
            <input type="password" placeholder="Digite sua senha" name="password" id="password" required
              onChange={element=>setPassword(element.target.value)}
              className="text-sm w-full mb-4 pl-3 py-2 rounded border shadow focus:outline-none hover:border-blue-light hover:ring-1 hover:ring-blue-dark focus:border-blue-dark focus:ring-1 focus:ring-blue-dark text-black"
            />
            <Button>Criar</Button>
        </form>
      </section>
    </div>
    </>
  )
}