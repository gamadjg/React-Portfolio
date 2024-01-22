import React from 'react';
import GithubIcon from '../assets/github-mark-white.svg';
import LinkedInIcon from '../assets/icons8-linkedin.svg';

export const Footer = () => {
	return (
		<section className='container'>
			<div className='footer-content'>
				<div>
					<div className='socials'>
						<a href='github.com'>
							<img src={GithubIcon} alt='Github Icon' />
						</a>
						<a href='linkedin.com'>
							<img src={LinkedInIcon} alt='Linkedin Icon' />
						</a>
					</div>
					<div>
						Icons by{' '}
						<a target='_blank' href='https://icons8.com'>
							Icons8
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};
