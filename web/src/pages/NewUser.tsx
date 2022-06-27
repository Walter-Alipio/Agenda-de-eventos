import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { FormEvent, useState } from "react";
import { BackButton } from "../components/BackButton";

export function NewUser(){

    function handleEvent(event: FormEvent){
    event.preventDefault();

  }
  return (
    <>
    <Header />
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
              className="text-sm w-full mb-4 pl-3 py-2 rounded border shadow focus:outline-none hover:border-blue-light hover:ring-1 hover:ring-blue-dark focus:border-blue-dark focus:ring-1 focus:ring-blue-dark text-black"
            />

            <label htmlFor="email" className="text-sm font-bold text-gray-700 mb-2">
              E-mail
            </label>
            <input type="email" placeholder="Digite seu e-mail" name="email" id="email" required
              className="text-sm w-full mb-4 pl-3 py-2 rounded border shadow focus:outline-none hover:border-blue-light hover:ring-1 hover:ring-blue-dark focus:border-blue-dark focus:ring-1 focus:ring-blue-dark text-black"
            />

            <label htmlFor="password" className="text-sm font-bold text-gray-700 mb-2">Senha</label>
            <input type="password" placeholder="Digite sua senha" name="password" id="password" required
              className="text-sm w-full mb-4 pl-3 py-2 rounded border shadow focus:outline-none hover:border-blue-light hover:ring-1 hover:ring-blue-dark focus:border-blue-dark focus:ring-1 focus:ring-blue-dark text-black"
            />
            <Button>Criar</Button>
        </form>
      </section>
    </div>
    </>
  )
}