import React from "react";
import { useParams } from "react-router-dom";
import "./page.scss";

function Page({ pages }) {
	const { slug } = useParams();
	const page = pages.find((page) => page.slug === slug);
	return (
		<div>
			<h1>{page.name}</h1>
			<h2>{page.meta.title}</h2>
			{page.pageContent.map((content) => (
				<div key={content.id}>
					<div className="image-container">
						<div
							className="image-section"
							style={{
								backgroundImage: `url(${content.image.url})`,
								backgroundPosition: "center",
							}}
						></div>
					</div>
					<h2>{content.heading}</h2>
					<h3>{content.subHeading}</h3>
					<p>{content.bodyText}</p>
					<footer>{page.pageFooter.copyrightText}</footer>
				</div>
			))}
		</div>
	);
}

export default Page;
