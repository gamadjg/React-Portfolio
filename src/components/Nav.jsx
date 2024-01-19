import ToggleField from './ToggleField';

export const Nav = (props) => {
	const { contentAreas } = props;
	return (
		<div className='nav'>
			<img alt='logo'></img>
			<ToggleField toggleFieldList={contentAreas} toggleClass='nav-toggle' />
		</div>
	);
};
