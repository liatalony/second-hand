import React from "react";
import { getByRole, screen } from "@testing-library/react";
import { render } from "../../../test-utils";
import Shop from "../Shop";
import Categories from "../../../components/categories/Categories";

describe("Shop", () => {
	test("renders shop component", () => {
		const shop = render(<Shop />);
		// const shop = getByRole("button");
		// expect(shop).toBeDefined();
		// render(<Shop />);

		// expect(screen.getByText("Clothes")).toBeInTheDocument();
		// expect(screen.getAllByRole("button")).toBeInTheDocument();
	});
});
