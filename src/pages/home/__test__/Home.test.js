import React from "react";
import Home from "../Home";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("blah blah blah", () => {
	const component = render(<Home />);
	const headerEl = component.getByTestId("header");

	expect(headerEl.textContent).toBe("Home");
});
