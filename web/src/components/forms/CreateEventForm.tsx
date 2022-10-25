import { FormEvent } from 'react';
import { Button } from '../Button';

interface Form {
	setName: React.Dispatch<React.SetStateAction<string>>;
	setDate: React.Dispatch<React.SetStateAction<string>>;
	setStart: React.Dispatch<React.SetStateAction<string>>;
	setEnd: React.Dispatch<React.SetStateAction<string>>;
	setDescription: React.Dispatch<React.SetStateAction<string>>;

	name: string;
	date: string;
	start: string;
	end: string;
	description: string;

	handleEvent: (event: FormEvent) => void;
}

export function CreateEventForm(props: Form) {
	return (
		<form className='flex flex-col' onSubmit={props.handleEvent}>
			<label htmlFor='name' className='text-sm font-bold text-gray-700 mb-2'>
				Nome:
			</label>
			<input
				type='text'
				placeholder='Nome do evento'
				name='name'
				id='name'
				required
				value={props.name}
				onChange={event => props.setName(event.target.value)}
				className='text-sm w-full mb-4 pl-3 py-2 rounded border shadow focus:outline-none hover:border-blue-light hover:ring-1 hover:ring-blue-dark focus:border-blue-dark focus:ring-1 focus:ring-blue-dark text-black'
			/>

			<label htmlFor='date' className='text-sm font-bold text-gray-700 mb-2'>
				Data:
			</label>
			<input
				type='date'
				placeholder='Data'
				name='date'
				id='date'
				required
				value={props.date}
				onChange={event => props.setDate(event.target.value)}
				className='text-sm w-full mb-4 pl-3 py-2 rounded border shadow focus:outline-none hover:border-blue-light hover:ring-1 hover:ring-blue-dark focus:border-blue-dark focus:ring-1 focus:ring-blue-dark text-black'
			/>

			<div className='grid grid-cols-2 w-full gap-2'>
				<div>
					<label
						htmlFor='start'
						className='text-sm font-bold text-gray-700 mb-2 block'
					>
						Início:
					</label>
					<input
						type='time'
						name='start'
						id='start'
						required
						value={props.start}
						onChange={event => props.setStart(event.target.value)}
						className='text-sm mb-4 pl-3 py-2 rounded border shadow focus:outline-none hover:border-blue-light hover:ring-1 hover:ring-blue-dark focus:border-blue-dark focus:ring-1 focus:ring-blue-dark text-black w-full'
					/>
				</div>

				<div>
					<label
						htmlFor='end'
						className='text-sm font-bold text-gray-700 mb-2 block'
					>
						Termino:
					</label>
					<input
						type='time'
						name='end'
						id='end'
						required
						value={props.end}
						onChange={event => props.setEnd(event.target.value)}
						className='text-sm mb-4 pl-3 py-2 rounded border shadow focus:outline-none hover:border-blue-light hover:ring-1 hover:ring-blue-dark focus:border-blue-dark focus:ring-1 focus:ring-blue-dark text-black w-full '
					/>
				</div>
			</div>
			<label
				htmlFor='description'
				className='text-sm font-bold text-gray-700 mb-2'
			>
				Descrição:
			</label>
			<textarea
				name=''
				id='description'
				cols={30}
				rows={7}
				maxLength={350}
				required
				onChange={event => props.setDescription(event.target.value)}
				value={props.description}
				className='h-20 text-sm mb-4 pl-3 p-2 rounded border shadow focus:outline-none hover:border-blue-light hover:ring-1 hover:ring-blue-dark focus:border-blue-dark focus:ring-1 focus:ring-blue-dark text-black resize-none overflow-x-hidden'
			></textarea>

			<Button>Salvar</Button>
		</form>
	);
}
