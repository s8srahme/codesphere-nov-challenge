import React from "react";

import { render, screen } from "@testing-library/react";

import { App } from "./App";

test("renders learn react link", () => {
	render(<App />);
	const titleElement = screen.getByText(/New Year 2024/i);
	expect(titleElement).toBeInTheDocument();
});
