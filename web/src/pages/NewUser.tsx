import { Button } from "../components/Button";
import { FormEvent, useState } from "react";
import { BackButton } from "../components/BackButton";
import axios from 'axios'
import ModalOk from "../components/modal/ModalOk";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { seePassword } from "../util/seePassword";


export function NewUser(){

 
  const [name,setName] = useState(' ');
  const [email,setEmail] = useState(' ');
  const [password,setPassword] = useState(' ');
  const [confirmePassword,setConfirmePassword ] = useState(' ');

  //password field visible
  const [passwordVisible,setPasswordVisible] = useState<'text' | 'password'>('password');
  const [activeEyes,setActiveEyes] = useState(false);
  const [confirmePasswordVisible,setConfirmePasswordVisible] = useState<'text' | 'password'>('password');
  const [confirmeActiveEyes,setConfirmeActiveEyes] = useState(false);

  const [isOpen, setIsOpen] = useState(false)

  const [error,setError] = useState(false);

//Envia os dados para API e volta para pagina de login
  async function handleEvent(event: FormEvent){
    event.preventDefault();
    if( password !== confirmePassword ){ 
      console.log(error)
      setError(true);
      return 
    };

    setError(false);
    console.log('Cadastrado')

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
              maxLength={30}
              onChange={element=>setName(element.target.value)}
              className="text-sm w-full mb-4 pl-3 py-2 rounded border shadow focus:outline-none hover:border-blue-light hover:ring-1 hover:ring-blue-dark focus:border-blue-dark focus:ring-1 focus:ring-blue-dark text-black"
            />

            <label htmlFor="email" className="text-sm font-bold text-gray-700 mb-2">
              E-mail
            </label>
            <input type="email" placeholder="Digite seu e-mail" 
              maxLength={30}
              name="email" 
              id="email" 
              required
              onChange={element=>setEmail(element.target.value)}
              className="text-sm w-full mb-4 pl-3 py-2 rounded border shadow focus:outline-none hover:border-blue-light hover:ring-1 hover:ring-blue-dark focus:border-blue-dark focus:ring-1 focus:ring-blue-dark text-black"
            />

            <label htmlFor="password" className="text-sm font-bold text-gray-700 mb-2">Senha</label>

            <div  className="text-sm w-full mb-4  rounded border shadow focus:outline-none  text-black relative flex items-center">
  
              <input type={passwordVisible} 
                placeholder="Digite sua senha" 
                name="password" 
                id="password" 
                required
                onChange={element=>setPassword(element.target.value)}
                className="pl-3 py-2 w-full h-full bg-inherit focus:outline-none rounded hover:border-blue-light hover:ring-1 hover:ring-blue-dark focus:border-blue-dark focus:ring-1 focus:ring-blue-dark" 
              />
              <button 
                className="absolute right-2"
                onClick={event=>seePassword(
                event,
                setPasswordVisible,
                setActiveEyes,
                activeEyes
                )}
              >
                { activeEyes ? <AiFillEye /> : <AiFillEyeInvisible />}
              </button>
            </div>

            <label htmlFor="confirmePassword" className="text-sm font-bold text-gray-700 mb-2">Confirme sua senha</label>
            <div className="text-sm w-full mb-4  rounded border shadow focus:outline-none  text-black relative flex items-center">

              <input type={confirmePasswordVisible} 
                placeholder="Confirme a senha" name="password" id="confirmePassword"
                required
                onChange={element=>setConfirmePassword(element.target.value)}
                className="pl-3 py-2 w-full h-full bg-inherit focus:outline-none rounded hover:border-blue-light hover:ring-1 hover:ring-blue-dark focus:border-blue-dark focus:ring-1 focus:ring-blue-dark" 
              />
              <button 
                className="absolute right-2"
                onClick={event=>seePassword(
                event,
                setConfirmePasswordVisible,
                setConfirmeActiveEyes,
                confirmeActiveEyes
                )}
              >
                { confirmeActiveEyes ? <AiFillEye /> : <AiFillEyeInvisible />}
              </button>
            </div>

            {
              error ?   <p className={`text-center text-bold text-red-600`}>
              A senha deve ser idêntica.
              </p> : ''
            }
          
            <Button>Criar</Button>
        </form>
      </section>
    </div>
    </>
  )
}