const Button = (buttonFields) => {
	const { buttonText, buttonClass } = buttonFields;
	return <div className={buttonClass}>{buttonText}</div>;
};

export default Button;
