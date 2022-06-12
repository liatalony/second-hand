import React from "react";
import { getByRole, render, screen } from "@testing-library/react";
import Shop from "../Shop";
import Categories from "../../../components/categories/Categories";

describe("Shop", () => {
	test("renders shop component", () => {
		const shop = render(<Shop />);
	});
});
