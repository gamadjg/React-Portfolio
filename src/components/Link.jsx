import React from 'react';

const Link = (Linkprops) => {
	const { linkText, linkHref, linkClass } = Linkprops;
	return (
		<a href={linkHref} className={linkClass}>
			{linkText}
		</a>
	);
};

export default Link;
