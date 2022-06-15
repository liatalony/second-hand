import React from "react";
import { Link, useParams } from "react-router-dom";
import { Fade } from "react-reveal";
import "./page.scss";

function Page({ pages }) {
	const { slug } = useParams();
	const page = pages.find((page) => page.slug === slug);
	const title = page.meta.title;
	document.title = title;

	return (
		<div className="container">
			<h1>{page.name}</h1>
			{page.pageContent.map((content) => (
				<div key={content.id} className="cms-page-content">
					<Fade bottom duration={1000} distance="50px">
						<div className="container--image">
							<div
								className="image-bg"
								style={{
									backgroundImage: `url(${content.image.url})`,
									backgroundPosition: "center",
									backgroundSize: "cover",
								}}
							></div>
						</div>
					</Fade>
					<Fade delay={200}>
						<div className="container--text">
							<div className="container--text--heading">
								<h2>{content.heading}</h2>
								<h3>{content.subHeading}</h3>
							</div>
							<p>{content.bodyText}</p>
						</div>
					</Fade>
				</div>
			))}
			<div className="btn-container">
				<Link to={"/dashboard/signup"} className="btn btn--primary">
					Start selling
				</Link>
			</div>
		</div>
	);
}

export default Page;
