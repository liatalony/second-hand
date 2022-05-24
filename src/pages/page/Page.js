import React from "react";
import { useParams } from "react-router-dom";

// function Page({ pages }) {
// 	const { slug } = useParams();
// 	const page = pages.find((page) => page.slug === slug);
// 	return (
// 		<div>
// 			<h1>{page.meta.title}</h1>
// 			<h1>{page.name}</h1>
// 		</div>
// 	);
// }

function Page({ pages }) {
	// console.log(pages);
	const { slug } = useParams();
	const page = pages.find((page) => page.slug === slug);
	// console.log(page);
	return (
		<div>
			<h1>tests</h1>
			<h1>{page.name}</h1>
			<h2>{page.meta.title}</h2>
		</div>
	);
}

export default Page;
