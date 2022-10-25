import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import { Router } from './routes';

function App() {
	return (
		<BrowserRouter>
			<Router />
		</BrowserRouter>
	);
}

export default App;
