export const SkillsContainer = ({ skillsContent }) => {
	const formattedSkills = skillsContent.map((item) => {
		const list = item['list'].map((listItem) => {
			return (
				<li key={listItem} className='skills-list-item'>
					{listItem}
				</li>
			);
		});

		return (
			<div key={item.listName} className='skills-list-column'>
				<div className='skills-list-title'>{item.listName}</div>
				<div className='skills-list'>{list}</div>
			</div>
		);
	});

	return (
		<section className='container'>
			<div className='container-title'>Skills</div>
			<section className='skills-content'>{formattedSkills}</section>
		</section>
	);
};
