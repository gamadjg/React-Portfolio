import './styles/App.scss';
import { Nav } from './components/Nav';
import { db } from './assets/db.js';

function App() {
	let contentAreas = [];
	for (const item of db.content) {
		contentAreas.push(item.name);
	}

	// console.log(contentAreas);

	return (
		<main>
			<Nav contentAreas={contentAreas} />
		</main>
	);
}

export default App;
