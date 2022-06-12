import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Categories from "../Categories";

test("test checkbox functionality", () => {
	render(<Categories />);
	// check that checkboxes start as unchecked
	const checkbox = screen.getByTestId("hello");
	expect(checkbox).not.toBeChecked();
	// check that check happens when clicked
	fireEvent.click(checkbox);
	expect(checkbox.checked).toEqual(true);
});
