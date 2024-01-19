const Button = (buttonFields) => {
	const { buttonText, buttonClass, handleClick } = buttonFields;
	return (
		<button className={buttonClass} onClick={handleClick}>
			{buttonText}
		</button>
	);
};

export default Button;
