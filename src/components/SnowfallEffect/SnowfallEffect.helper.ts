export const getRandomNumber = (num: number) => {
	return Math.floor(Math.random() * num);
};

export const getRandomStyles = () => {
	const top = getRandomNumber(100);
	const left = getRandomNumber(100);
	const duration = getRandomNumber(10) + 10;
	const size = getRandomNumber(25) + 25;
	return {
		top: `-${top}%`,
		left: `${left}%`,
		fontSize: `${size}px`,
		animationDuration: `${duration}s`
	};
};
