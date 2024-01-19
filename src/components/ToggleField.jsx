// import Link from './Link';

const ToggleField = (props) => {
	const { toggleFieldList } = props;

	let formattedToggleFieldList = toggleFieldList.map((item) => {
		return <Link key={item} LinkText={item} LinkClass='nav-link' />;
	});

	return <div className='nav-toggle'>{formattedToggleFieldList}</div>;
};

export default ToggleField;
