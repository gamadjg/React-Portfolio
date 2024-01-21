import { useState, useEffect } from 'react';

export const ProjectsContainer = ({ projectsContent }) => {
	let initialList = [];
	for (const item in projectsContent) {
		initialList = [...initialList, ...projectsContent[item]];
	}
	const [showList, setShowList] = useState([]);
	const [toggleFields, setToggleFields] = useState([]);
	useEffect(() => {
		setToggleFields(['All', ...Object.keys(projectsContent)]);
		setShowList(initialList);
	}, []);

	const handleProjectsToggleClick = (e) => {
		e.target.value == 'All' ? setShowList(initialList) : setShowList(projectsContent[e.target.value]);
	};

	const formattedToggleFields = toggleFields.map((toggleName) => {
		return (
			<button key={toggleName} value={toggleName} className='projects-toggle' onClick={handleProjectsToggleClick}>
				{toggleName}
			</button>
		);
	});

	const formattedList = showList.map((listItem) => {
		return (
			<section className='project-item' key={listItem.title}>
				<section className='project-header'>
					<div className='project-header-left'>
						<div>{listItem.title}</div>
						<div>{listItem.where}</div>
						{listItem.github ? <a href={listItem.github}>Github</a> : ''}
						{listItem.liveLink ? <a href={listItem.github}>Preview</a> : ''}
					</div>
					<div className='project-header-right'>{listItem.year}</div>
				</section>
				<div className='project-role'>{listItem.role}</div>
				<div className='proejct-description'>{listItem.description}</div>
			</section>
		);
	});

	return (
		<section className='container'>
			<div className='container-title'>Projects</div>

			<section className='projects-content'>
				<div className='projects-toggle-field-container'>{formattedToggleFields}</div>
				<div className='projects-list'>{formattedList}</div>
			</section>
		</section>
	);
};
