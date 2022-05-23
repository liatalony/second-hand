import React from "react";
import { useParams } from "react-router-dom";

function Page({ pages }) {
	const { slug } = useParams();
	const page = pages.find((page) => page.slug === slug);
	return (
		<div>
			<h1>{page.meta.title}</h1>
			<h1>{page.name}</h1>
		</div>
	);
}

export default Page;
