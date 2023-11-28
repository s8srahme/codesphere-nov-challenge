import React, { useEffect, useState } from "react";

import { DarkMode, LightMode } from "@mui/icons-material";
import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";

import { ColorContext } from "providers/ColorContextProvider";

import { COUNTER_KEYS } from "./CountdownTimer.constants";
import { calculateRemainingTime, isTimeLeft, prependZeroToNumber } from "./CountdownTimer.helper";
import { styles } from "./CountdownTimer.styles";
import { Counter } from "./CountdownTimer.types";

const CountdownTimer = () => {
	const [remainingTime, setRemainingTime] = useState<Counter>((): Counter => calculateRemainingTime());
	const theme = useTheme();
	const { toggleColorMode } = React.useContext(ColorContext);

	useEffect(() => {
		const timeoutId = setInterval(() => {
			const newRemainingTime: Counter = calculateRemainingTime();
			if (!isTimeLeft(newRemainingTime)) clearInterval(timeoutId);
			setRemainingTime(newRemainingTime);
		}, 1000);

		return () => {
			clearInterval(timeoutId);
		};
	}, []);

	return (
		<Box sx={styles.root}>
			<Box sx={styles.textWrapper}>
				<Typography variant="h3">New Year 2024</Typography>
				<Divider sx={styles.textDivider} />
				<Typography variant="h5">Countdown</Typography>
			</Box>
			<Box sx={styles.counterOuterWrapper}>
				{COUNTER_KEYS.map((key, index) => (
					<Box sx={styles.counterInnerWrapper} key={key}>
						<Box sx={styles.counterTextWrapper}>
							<Typography variant="h1" sx={styles.counterText}>
								{prependZeroToNumber(remainingTime[key])}
							</Typography>
							<Typography variant="h6">{key}</Typography>
						</Box>
						{index !== COUNTER_KEYS.length - 1 && <Divider orientation="vertical" sx={styles.counterDivider} />}
					</Box>
				))}
			</Box>
			<Box sx={styles.modeWrapper}>
				<Typography variant="h6" sx={styles.modeText}>
					{theme.palette.mode} mode
				</Typography>
				<IconButton sx={styles.modeButton} onClick={toggleColorMode} color="inherit">
					{theme.palette.mode === "dark" ? <DarkMode /> : <LightMode />}
				</IconButton>
			</Box>
		</Box>
	);
};

export { CountdownTimer };
