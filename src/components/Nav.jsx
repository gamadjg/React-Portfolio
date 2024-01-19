export const Nav = (props) => {
	const { contentAreas } = props;

	let formattedLinks = contentAreas.map((link) => {
		return (
			<a key={link} className='nav-link' href={`#${link}`}>
				{link}
			</a>
		);
	});

	return (
		<div className='nav'>
			<div>LOGO{/* <img alt='logo'></img> */}</div>
			<section className='nav-link-section'>{formattedLinks}</section>
		</div>
	);
};
