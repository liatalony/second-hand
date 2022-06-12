import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Item from "../Item";

test("renders component", () => {
	// check that component renders
	const { getByTestId } = render(<Item />);
	const item = getByTestId("item");
	expect(item).toBeDefined();

	// check that button has class 'liked' when clicked
	const button = screen.getByTestId("btn");
	fireEvent.click(button);
	expect(button).toHaveClass("item-heart-liked");
});
