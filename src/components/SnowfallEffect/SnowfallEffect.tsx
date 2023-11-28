import React from "react";

import { Box, Typography } from "@mui/material";

import { SNOW_CONTENT } from "./SnowfallEffect.constants";
import { getRandomNumber, getRandomStyles } from "./SnowfallEffect.helper";
import { styles } from "./SnowfallEffect.styles";

export const SnowfallEffect = () => {
	const createSnow = (num: number): JSX.Element[] => {
		const elements: JSX.Element[] = [];
		for (let i = num; i > 0; i -= 1) {
			const snow = (
				<Box sx={styles.snow} key={i.toString()} style={getRandomStyles()}>
					<Typography sx={{ fontSize: "inherit" }}>{SNOW_CONTENT[getRandomNumber(3)]}</Typography>
				</Box>
			);
			elements.push(snow);
		}
		return elements;
	};

	return <Box sx={styles.snowContainer}>{createSnow(30)}</Box>;
};
