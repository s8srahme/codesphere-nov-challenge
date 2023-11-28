import { Counter, CounterKeys } from "./CountdownTimer.types";

export const DAYS_TO_MS = 24 * 60 * 60 * 1000;
export const HOURS_TO_MS = 60 * 60 * 1000;
export const MINUTES_TO_MS = 60 * 1000;
export const SECONDS_TO_MS = 1000;
export const INITIAL_REMAINING_TIME: Counter = {
	days: 0,
	hours: 0,
	minutes: 0,
	seconds: 0
};
export const COUNTER_KEYS: CounterKeys[] = ["days", "hours", "minutes", "seconds"];
