import React from 'react';

export const WorkContainer = ({ workContent }) => {
	const formattedList = workContent.map((workItem) => {
		return (
			<section className='work-item' key={workItem.company}>
				<section className='work-header'>
					<div className='work-header-left'>
						<div>{workItem.company}</div>
					</div>
					<div className='work-header-right'>
						{workItem.started} - {workItem.ended}
					</div>
				</section>
				<div className='work-role'>{workItem.role}</div>
				<div className='work-description'>{workItem.description}</div>
			</section>
		);
	});

	return (
		<section className='container'>
			<div className='container-title'>Work</div>
			<section className='work-content'>{formattedList}</section>
		</section>
	);
};
