import { FormEvent, useEffect, useState } from 'react';
import { BackButton } from '../components/BackButton';
import { CreateEventForm } from '../components/forms/CreateEventForm';
import ModalOk from '../components/modal/ModalOk';

import DataUser from '../auth/dataUser';
import axios from 'axios';

export function CreateEvent() {
	//monitora o estado dos inputs
	const [name, setName] = useState('');
	const [date, setDate] = useState('');
	const [start, setStart] = useState('');
	const [end, setEnd] = useState('');
	const [description, setDescription] = useState('');

	let [isOpen, setIsOpen] = useState(false);

	//limpa o formulário
	function clear() {
		setName('');
		setDate('');
		setStart('');
		setEnd('');
		setDescription('');
	}

	//Envia os dados para API
	async function handleEvent(event: FormEvent) {
		event.preventDefault();
		await axios({
			method: 'post',
			url: 'http://localhost:3333/events',
			headers: {
				Authorization: 'Bearer ' + DataUser.getToken(),
			},
			data: {
				name: name,
				date: date,
				start: start,
				end: end,
				description: description,
			},
		})
			.then(response => {
				console.log(response);
				clear();
				setIsOpen(true);
			})
			.catch(error => {
				console.log(error);
			});
	}

	return (
		<>
			<ModalOk
				setIsOpen={setIsOpen}
				isOpen={isOpen}
				message={'Criado com sucesso!'}
				buttonText={'Voltar'}
			/>
			<BackButton />
			<div className='w-full h-[calc(100vh+4rem)] flex flex-col items-center px-6'>
				<h1 className='text-4xl mt-11 mb-8 font-extrabold text-sky-900'>
					{' '}
					Criar evento
				</h1>

				<section className='flex flex-col justify-center p-6 gap-2 w-full mx-4 max-w-[440px] bg-white rounded-md shadow-md '>
					<CreateEventForm
						setName={setName}
						setDate={setDate}
						setStart={setStart}
						setEnd={setEnd}
						setDescription={setDescription}
						name={name}
						date={date}
						start={start}
						end={end}
						description={description}
						handleEvent={handleEvent}
					/>
				</section>
			</div>
		</>
	);
}
