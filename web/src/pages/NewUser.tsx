import { Button } from "../components/Button";
import { Header } from "../components/Header";

export function NewUser(){
  return (
    <>
    <Header />
    <div className="w-full h-screen flex items-center">
      <section className="flex flex-col justify-center p-6 gap-2 w-full mx-8 lg:w-1/3 bg-white rounded-md shadow-md" >
        <form className="flex flex-col">
            <label htmlFor="name" className="text-sm font-bold text-gray-700 mb-2">
              Nome:
            </label>
            <input type="text" placeholder="Digite seu nome" name="name" id="name"
              className="text-sm w-full mb-4 pl-3 py-2 rounded border shadow focus:outline-none hover:border-blue-light hover:ring-1 hover:ring-blue-dark focus:border-blue-dark focus:ring-1 focus:ring-blue-dark text-black"
            />

             <label htmlFor="birthday" className="text-sm font-bold text-gray-700 mb-2">
              Data de nascimento:
            </label>
            <input type="date" placeholder="Digite seu nome" name="birthday" id="birthday"
              className="text-sm w-full mb-4 pl-3 py-2 rounded border shadow focus:outline-none hover:border-blue-light hover:ring-1 hover:ring-blue-dark focus:border-blue-dark focus:ring-1 focus:ring-blue-dark text-black"
            />

            <label htmlFor="email" className="text-sm font-bold text-gray-700 mb-2">
              E-mail
            </label>
            <input type="email" placeholder="Digite seu e-mail" name="email" id="email"
              className="text-sm w-full mb-4 pl-3 py-2 rounded border shadow focus:outline-none hover:border-blue-light hover:ring-1 hover:ring-blue-dark focus:border-blue-dark focus:ring-1 focus:ring-blue-dark text-black"
            />

            <label htmlFor="password" className="text-sm font-bold text-gray-700 mb-2">Senha</label>
            <input type="password" placeholder="Digite sua senha" name="password" id="password" 
              className="text-sm w-full mb-4 pl-3 py-2 rounded border shadow focus:outline-none hover:border-blue-light hover:ring-1 hover:ring-blue-dark focus:border-blue-dark focus:ring-1 focus:ring-blue-dark text-black"
            />

            <Button>Criar</Button>
        </form>
      </section>
    </div>
    </>
  )
}