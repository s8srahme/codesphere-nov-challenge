export const styles = {
	snowContainer: {
		height: "100%",
		width: "100%",
		overflow: "hidden",
		position: "absolute"
	},
	snow: {
		// shorthand: [animation-name] [animation-timing-function] [animation-duration] [animation-iteration-count]
		animation: "fall ease-in infinite, sway ease-in-out infinite",
		// animationDuration: `${getRandomNumber(10) + 10}s`,
		color: "palette.primary",
		position: "absolute",
		"@keyframes fall": {
			"0%": {
				/* top: `-${getRandomNumber(100)}%`, */
				opacity: 0
			},
			"50%": {
				opacity: 1
			},
			"100%": {
				opacity: 1,
				top: "100vh"
			}
		},
		"@keyframes sway": {
			"0%": {
				marginLeft: 0
			},
			"25%": {
				marginLeft: 4
			},
			"50%": {
				marginLeft: -4
			},
			"75%": {
				marginLeft: 4
			},
			"100%": {
				marginLeft: 0
			}
		}
	}
};
