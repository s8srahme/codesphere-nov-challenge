import React from "react";

import { Box } from "@mui/material";

import { styles } from "App.styles";
import { ColorContextProvider } from "providers/ColorContextProvider";

import { CountdownTimer } from "./components/CountdownTimer/CountdownTimer";
import { SnowfallEffect } from "./components/SnowfallEffect/SnowfallEffect";

export const App = () => {
	return (
		<ColorContextProvider>
			<Box sx={styles.root}>
				<CountdownTimer />
				<SnowfallEffect />
			</Box>
		</ColorContextProvider>
	);
};
