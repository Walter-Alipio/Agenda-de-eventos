import { FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import {userInfo} from '../auth/user'
import axios from 'axios'
import DataUser from "../auth/dataUser";


export function Login(){
  const navigate = useNavigate();
  const [email, setEmail] = useState(' ');
  const [password,setPassword ] = useState(' ');
  const [err, setErr] = useState(' ')

  async function  Login(event: FormEvent){
  event.preventDefault();


   await axios.post('http://localhost:3333/authenticate', {
       email: email,
       password: password
    })
    .then((response) => {
      const data = response
      let user = userInfo(data)
      DataUser.setStorage(user);
      navigate('/home')

    })
    .catch( (error) => {
      const res = error.response.data.error;
      console.log(error);
      setErr(res)
    });
  }

  
  return (
    <div className="w-full h-screen flex flex-col items-center px-3 transition-transform">
       <div className="flex justify-center w-20 mt-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              enableBackground="new 0 0 512 512"
              version="1.1"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
              className=" shadow-lg rounded-md"
            >
              <path
                fill="#D8DCE1"
                d="M0 134v328c0 22.055 17.945 40 40 40h432c22.055 0 40-17.945 40-40V134H0z"
              ></path>
              <path
                fill="#FF4F19"
                d="M472 22H40C17.945 22 0 39.945 0 62v72h512V62c0-22.055-17.946-40-40-40zM64 102c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm384 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z"
              ></path>
              <path
                fill="#FFF"
                d="M256 206c-17.648 0-32 14.352-32 32s14.352 32 32 32 32-14.352 32-32-14.352-32-32-32zM176 206c-17.648 0-32 14.352-32 32s14.352 32 32 32 32-14.352 32-32-14.352-32-32-32zM96 206c-17.648 0-32 14.352-32 32s14.352 32 32 32 32-14.352 32-32-14.352-32-32-32zM336 206c-17.648 0-32 14.352-32 32s14.352 32 32 32 32-14.352 32-32-14.352-32-32-32zM416 270c17.648 0 32-14.352 32-32s-14.352-32-32-32-32 14.352-32 32 14.351 32 32 32zM256 286c-17.648 0-32 14.352-32 32s14.352 32 32 32 32-14.352 32-32-14.352-32-32-32zM176 286c-17.648 0-32 14.352-32 32s14.352 32 32 32 32-14.352 32-32-14.352-32-32-32zM96 286c-17.648 0-32 14.352-32 32s14.352 32 32 32 32-14.352 32-32-14.352-32-32-32zM336 286c-17.648 0-32 14.352-32 32s14.352 32 32 32 32-14.352 32-32-14.352-32-32-32zM416 286c-17.648 0-32 14.352-32 32s14.352 32 32 32 32-14.352 32-32-14.352-32-32-32zM256 366c-17.648 0-32 14.352-32 32s14.352 32 32 32 32-14.352 32-32c0-17.649-14.352-32-32-32zM176 366c-17.648 0-32 14.352-32 32s14.352 32 32 32 32-14.352 32-32c0-17.649-14.352-32-32-32zM96 366c-17.648 0-32 14.352-32 32s14.352 32 32 32 32-14.352 32-32c0-17.649-14.352-32-32-32zM336 366c-17.648 0-32 14.352-32 32s14.352 32 32 32 32-14.352 32-32c0-17.649-14.352-32-32-32zM416 366c-17.648 0-32 14.352-32 32s14.352 32 32 32 32-14.352 32-32c0-17.649-14.352-32-32-32z"
              ></path>
              <g>
                <path
                  fill="#5C546A"
                  d="M64 90c-6.625 0-12-5.371-12-12V22c0-6.629 5.375-12 12-12s12 5.371 12 12v56c0 6.629-5.375 12-12 12z"
                ></path>
              </g>
              <g>
                <path
                  fill="#5C546A"
                  d="M448 90c-6.625 0-12-5.371-12-12V22c0-6.629 5.375-12 12-12s12 5.371 12 12v56c0 6.629-5.375 12-12 12z"
                ></path>
              </g>
              <g>
                <circle cx="96" cy="238" r="32" fill="#FFD200"></circle>
              </g>
              <g>
                <circle cx="256" cy="398" r="32" fill="#FF9600"></circle>
              </g>
              <g>
                <circle cx="336" cy="318" r="32" fill="#FF4F19"></circle>
              </g>
            </svg>
          </div>
          <h1 className="m-8 font-extrabold text-lg"> Calendário de Eventos </h1>
        <section 
        className="flex flex-col justify-center p-6 gap-2 w-full mx-8 max-w-[440px] bg-white rounded-md shadow-md" 
        >
          <form  
            className="flex flex-col"
            onSubmit={Login}
          >

            <label htmlFor="email" className="text-sm font-bold text-gray-700 mb-2">
              E-mail
            </label>
            <input type="email" placeholder="Digite seu e-mail" name="email" id="email"
              onChange={event=>{setEmail(event.target.value)}}
              className="text-sm w-full mb-4 pl-3 py-2 rounded border shadow focus:outline-none hover:border-blue-light hover:ring-1 hover:ring-blue-dark focus:border-blue-dark focus:ring-1 focus:ring-blue-dark text-black"
            />

            <label htmlFor="password" className="text-sm font-bold text-gray-700 mb-2">Senha</label>
            <input type="password" placeholder="Digite sua senha" name="password" id="password" 
              onChange={event=>{setPassword(event.target.value)}}
              className="text-sm w-full mb-4 pl-3 py-2 rounded border shadow focus:outline-none hover:border-blue-light hover:ring-1 hover:ring-blue-dark focus:border-blue-dark focus:ring-1 focus:ring-blue-dark text-black"
            />
            <p className="text-red-600 text-center text-lg">{err}</p>
            
            <Button >
              Login
            </Button>
          </form>
          <Link to={'/newUser'} className="text-sky-800 text-center">Criar Login</Link>
        </section>
    </div>
  )
}