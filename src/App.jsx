import './styles/App.css';
import { db } from './assets/db.js';
import { Nav } from './components/Nav';
import { HeroContainer } from './components/HeroContainer.jsx';
import { AboutContainer } from './components/AboutContainer.jsx';
import { SkillsContainer } from './components/SkillsContainer.jsx';
import { ProjectsContainer } from './components/ProjectsContainer.jsx';
import { WorkContainer } from './components/WorkContainer.jsx';
import { ContactContainer } from './components/ContactContainer.jsx';

function App() {
	let contentAreas = [];
	for (const item of db.content) {
		contentAreas.push(item.name);
	}

	return (
		<main>
			<Nav contentAreas={contentAreas} />
			<HeroContainer />
			<AboutContainer />
			<SkillsContainer />
			<ProjectsContainer />
			<WorkContainer />
			<ContactContainer />
		</main>
	);
}

export default App;
