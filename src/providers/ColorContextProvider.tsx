import React, { PropsWithChildren, useCallback, useState } from "react";

import { CssBaseline, PaletteMode, ThemeProvider, createTheme } from "@mui/material";

interface ColorContextSchema {
	toggleColorMode: () => void;
}

export const ColorContext = React.createContext<ColorContextSchema>({} as ColorContextSchema);

export const ColorContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const [mode, setMode] = useState<PaletteMode>("dark");

	const theme = createTheme({
		palette: {
			mode
		},
		typography: {
			fontFamily: "'Pacifico', cursive"
		}
	});

	const toggleColorMode = useCallback(() => {
		setMode(mode === "light" ? "dark" : "light");
	}, [mode]);

	const colorMode = React.useMemo(
		() => ({
			toggleColorMode
		}),
		[toggleColorMode]
	);

	return (
		<ColorContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline enableColorScheme />
				{children}
			</ThemeProvider>
		</ColorContext.Provider>
	);
};
