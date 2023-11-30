// Return a random integer between 0 (inclusive) and max (exclusive)
export const getRandomNumber = (max: number) => {
	return Math.floor(Math.random() * max);
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
