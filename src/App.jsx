import './styles/App.scss';
import db from './assets/db.js';
import { Nav } from './components/Nav';
import { HeroContainer } from './components/HeroContainer.jsx';
import { AboutContainer } from './components/AboutContainer.jsx';
import { SkillsContainer } from './components/SkillsContainer.jsx';
import { ProjectsContainer } from './components/ProjectsContainer.jsx';
import { WorkContainer } from './components/WorkContainer.jsx';
import { ContactContainer } from './components/ContactContainer.jsx';
import { Footer } from './components/Footer.jsx';

function App() {
	let contentAreas = Object.keys(db);

	return (
		<main>
			<Nav contentAreas={contentAreas} />
			<HeroContainer />
			<AboutContainer aboutContent={db.About} />
			<SkillsContainer skillsContent={db.Skills} />
			<ProjectsContainer projectsContent={db.Projects} />
			<WorkContainer workContent={db.Work} />
			<ContactContainer />
			<Footer />
		</main>
	);
}

export default App;
