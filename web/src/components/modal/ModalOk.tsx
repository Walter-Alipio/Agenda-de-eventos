import { Dialog, Transition } from '@headlessui/react'
import { CheckCircle, WarningCircle } from 'phosphor-react';
import { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom';

interface Props{
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  url: string;
  message:  string;
  buttonText: string;
}
export default function ModalOk({setIsOpen, isOpen, url, message, buttonText}: Props) {
  const navigate = useNavigate();

  function navigateTo(){
    navigate(url)
  }

  function closeModal() {
    setIsOpen(false)
    navigateTo();
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
                <div className='flex gap-3 items-center justify-center'>
                  <CheckCircle size={24} color=" #1dd300 "/>
                  <Dialog.Title className="text-lg font-medium leading-6 text-gray-900 text-center">
                    { message } 
                  </Dialog.Title>
                </div>
                  <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        {buttonText}
                      </button>
              </Dialog.Panel>
       
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )


}
