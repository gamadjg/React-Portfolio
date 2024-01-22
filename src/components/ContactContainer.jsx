import React, { useState } from 'react';

export const ContactContainer = () => {
	const [emailSubmitted, setEmailSubmitted] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Form submitted');
	};

	return (
		<section className='container'>
			<div className='container-title'>Contact</div>
			<section className='contact-content'>
				{emailSubmitted ? (
					<p className='email-submitted text-green-500 text-sm mt-2'>Email sent successfully!</p>
				) : (
					<form className='contact-form' onSubmit={handleSubmit}>
						<div className='form-item-container'>
							<label htmlFor='email' className='input-label'>
								{/* text-white block mb-2 text-sm font-medium */}
								Your email
							</label>
							<input
								name='email'
								type='email'
								id='email'
								required
								className='input-field'
								// bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5
								placeholder='david@gmail.com'
							/>
						</div>
						<div className='form-item-container'>
							<label
								htmlFor='subject'
								className='input-label'
								// text-white block text-sm mb-2 font-medium
							>
								Subject
							</label>
							<input
								name='subject'
								type='text'
								id='subject'
								required
								className='input-field'
								// bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5
								placeholder='Subject'
							/>
						</div>
						<div className='form-item-container'>
							<label
								htmlFor='message'
								className='input-label'
								// text-white block text-sm mb-2 font-medium
							>
								Message
							</label>
							<textarea
								name='message'
								id='message'
								className='input-field'
								// bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5
								placeholder='Message'
							/>
						</div>
						<button
							type='submit'
							className='submit-button'
							// bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full
						>
							Send Message
						</button>
					</form>
				)}
			</section>
		</section>
	);
};
