import { Dialog, Transition } from '@headlessui/react'
import {  WarningCircle } from 'phosphor-react';
import { Fragment } from 'react'
import axios from 'axios';
import DataUser from '../../auth/dataUser';

interface Props{
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setExclude: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  message:  string;
  id: string;
}
export default function ModalDelete({setIsOpen, setExclude, isOpen, message, id}: Props) {
  
  async function exclude(){

    axios({
      method: 'delete',
      url:'http://localhost:3333/events/'+id ,
      headers: {
         Authorization: "Bearer " + DataUser.getToken()
           }
    })
    .then((res)=>console.log(res.status))
    .catch((err)=>console.log(err.data.message))
    .finally(()=>{
      setIsOpen(false);
      setExclude(true);
    })

  }

  function closeModal() {
    setIsOpen(false)
  }

  return(
        <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">

              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all flex flex-col gap-3">
                <div className='flex flex-col gap-3 items-center justify-center'>
                  <WarningCircle size={44} color=" #e9a200 "/>
                  <Dialog.Title className="text-lg font-medium leading-6 text-gray-900 text-center">
                    { message } 
                    <p>Continuar?</p>
                  </Dialog.Title>
                </div>
                <div className='flex items-center justify-center w-full gap-5 mt-3'>
                  <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={exclude}
                      >
                       Sim
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                       Não
                  </button>
                </div>
              </Dialog.Panel>
       
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )


}
