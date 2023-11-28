import {
	DAYS_TO_MS,
	HOURS_TO_MS,
	INITIAL_REMAINING_TIME,
	MINUTES_TO_MS,
	SECONDS_TO_MS
} from "./CountdownTimer.constants";
import { Counter } from "./CountdownTimer.types";

export const isTimeLeft = (remainingTime: Counter): boolean => {
	const { seconds, minutes, hours, days } = remainingTime;
	return seconds >= 0 && minutes >= 0 && hours >= 0 && days >= 0;
};

// Prepend zero to single digit whole numbers
export const prependZeroToNumber = (num: number): string => (num < 10 && num > -1 ? "0" : "") + num;

export const calculateRemainingTime = (): Counter => {
	const deadlineTime = new Date("2024-01-01T00:00:00"); // Marks the end New Year's Eve 2023
	const currentTime = new Date();

	const timeDifferenceInMs = deadlineTime.getTime() - currentTime.getTime();
	let remainingTime: Counter = { ...INITIAL_REMAINING_TIME };
	let timeToBeExcludedInMs = 0;

	if (timeDifferenceInMs > 0) {
		const days = Math.floor((timeDifferenceInMs - timeToBeExcludedInMs) / DAYS_TO_MS);
		timeToBeExcludedInMs += days * DAYS_TO_MS;

		const hours = Math.floor((timeDifferenceInMs - timeToBeExcludedInMs) / HOURS_TO_MS);
		timeToBeExcludedInMs += hours * HOURS_TO_MS;

		const minutes = Math.floor((timeDifferenceInMs - timeToBeExcludedInMs) / MINUTES_TO_MS);
		timeToBeExcludedInMs += minutes * MINUTES_TO_MS;

		const seconds = Math.floor((timeDifferenceInMs - timeToBeExcludedInMs) / SECONDS_TO_MS);
		timeToBeExcludedInMs += seconds * SECONDS_TO_MS;

		remainingTime = {
			days,
			hours,
			minutes,
			seconds
		};
	}

	// NOTE: A very small amount of time has been lost in the calculation above due to the usage of Math.floor(). The
	// missing value is negligible but you can still check the difference using the line below:
	// console.log(timeDifferenceInMs - timeToBeExcludedInMs);

	return remainingTime;
};
