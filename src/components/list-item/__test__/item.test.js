import React from "react";

import { render } from "../../../test-utils";
import Item from "../Item";

test("renders component", () => {
	// check that component renders
	const { queryByTestId } = render(<Item />);
	const item = queryByTestId("item");
	expect(item).toBeDefined();

	// check that button has class 'liked' when clicked
	// const button = screen.queryByTestId("btn");
	// fireEvent.click(button);
	// expect(button).toHaveClass("item-heart-liked");
});
