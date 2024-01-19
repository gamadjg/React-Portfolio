export const SkillsContainer = ({ skillsContent }) => {
	// for (const item of skillsContent) {
	// 	console.log(item.listName);
	// }

	const formattedSkills = skillsContent.map((item) => {
		const list = item['list'].map((listItem) => {
			return (
				<li key={listItem} className='skills-list-item'>
					{listItem}
				</li>
			);
		});

		return (
			<div key={item.listName} className='list-container'>
				<div className='skills-list-title'>{item.listName}</div>
				<div>{list}</div>
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
