import GithubIcon from '../assets/github-mark-white.svg';
import LinkedInIcon from '../assets/icons8-linkedin.svg';

export const Nav = ({ contentAreas }) => {
	let formattedLinks = contentAreas.map((link) => {
		return (
			<a key={link} className='nav-link' href={`#${link}`}>
				{link}
			</a>
		);
	});

	return (
		<div className='nav'>
			<section className='nav-link-section'>{formattedLinks}</section>
			{/* <div className='socials'>
				<a href='github.com'>
					<img src={GithubIcon} alt='Github Icon' />
				</a>
				<a href='linkedin.com'>
					<img src={LinkedInIcon} alt='Linkedin Icon' />
				</a>
			</div> */}
		</div>
	);
};
