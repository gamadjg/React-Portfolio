import Button from './Button';

export const HeroContainer = () => {
	const downloadClick = (e) => {
		e.preventDefault();
		console.log('download cv clicked');
	};

	return (
		<section className='container-content'>
			<div className='hero-container-left'>
				<div className='hero-title'> Hi, my name is David</div>
				<div className='hero-left-btns'>
					<a href='#Contact' className='hero-contact-btn'>
						Contact
					</a>
					<Button buttonText='Download CV' buttonClass='hero-download-btn' onClick={downloadClick} />
				</div>
			</div>
			<div>
				<div>Image Placeholder</div>
			</div>
		</section>
	);
};
