import { isTimeLeft, prependZeroToNumber } from "./CountdownTimer.helper";
import { Counter } from "./CountdownTimer.types";

describe("CountdownTimer helper", () => {
	it("should prepend zero to single digit whole number", () => {
		expect(prependZeroToNumber(9)).toEqual("09");
		expect(prependZeroToNumber(0)).toEqual("00");
	});

	it("should not prepend zero to non-single digit whole number", () => {
		expect(prependZeroToNumber(11)).toEqual("11");
		expect(prependZeroToNumber(999)).toEqual("999");
	});

	it("should return false if no time is left", () => {
		const remainingTime: Counter = {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0
		};
		expect(isTimeLeft(remainingTime)).toEqual(false);
	});

	it("should return true if time is left", () => {
		const remainingTime: Counter = {
			days: 1,
			hours: 8,
			minutes: 0,
			seconds: 58
		};
		expect(isTimeLeft(remainingTime)).toEqual(true);
	});
});
