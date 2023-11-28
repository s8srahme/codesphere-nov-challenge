export const styles = {
	root: {
		zIndex: 9999
	},
	textWrapper: { display: "flex", flexDirection: "column", alignItems: "center" },
	textDivider: { bgcolor: "text.primary", width: "50%", mt: 2, mb: 1 },
	counterOuterWrapper: {
		mt: 6,
		display: "flex",
		flexDirection: "row",
		border: 4,
		borderColor: "text.primary",
		p: 2
	},
	counterInnerWrapper: { display: "flex", justifyContent: "center", alignItems: "center" },
	counterTextWrapper: {
		width: 180,
		height: 180,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column"
	},
	counterText: { mt: -4 },
	counterDivider: { height: 150, width: 4, bgcolor: "text.primary" },
	modeWrapper: { mt: 6, display: "flex", alignItems: "center", justifyContent: "center" },
	modeText: { textTransform: "capitalize" },
	modeButton: { border: 2, ml: 2 }
};
