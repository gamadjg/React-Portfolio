export const AboutContainer = ({ aboutContent }) => {
	return (
		<section className='container'>
			<div className='container-title'>About</div>
			<section className='about-content'>
				<div>{aboutContent.about}</div>
				{/* <div>{aboutContent.education}</div> */}
			</section>
		</section>
	);
};
