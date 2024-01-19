import Button from './Button';

const ToggleField = (props) => {
	const { toggleFieldList } = props;

	let formattedToggleFieldList = toggleFieldList.map((item) => {
		return <Button key={item} buttonText={item} buttonClass='nav-button' />;
	});

	return <div className='nav-toggle'>{formattedToggleFieldList}</div>;
};

export default ToggleField;
