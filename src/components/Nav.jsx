import ToggleField from './ToggleField';

export const Nav = (props) => {
	const { contentAreas } = props;
	return (
		<div className='nav'>
			<div>LOGO{/* <img alt='logo'></img> */}</div>
			<ToggleField toggleFieldList={contentAreas} toggleClass='nav-toggle' />
		</div>
	);
};
