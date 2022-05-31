import React from "react";
import Jacket from "../../assets/jacket.png";
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
					<h2>{content.heading}</h2>
					<h3>{content.subHeading}</h3>
					<p>{content.bodyText}</p>
				</div>
			))}
			<section>
				<h2>Section one</h2>
				<div className="image-container">
					<div
						className="image-section"
						style={{
							backgroundImage: `url(${Jacket})`,
							backgroundPosition: "center",
							backgroundSize: "cover",
						}}
					></div>
				</div>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit rem
					debitis ut pariatur accusantium dolor doloribus dolores nam voluptas
					eius, autem iusto, dolorem dicta ex fuga voluptate? Corrupti, natus
					culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
					expedita natus id, nihil dicta ea! Reiciendis officia rerum dolores
					repellendus quis earum, distinctio consequuntur mollitia laborum fugit
					minima quibusdam asperiores.
				</p>
			</section>
			<section>
				<h2>Section two</h2>
				<div className="image-container">
					<div
						className="image-section"
						style={{
							backgroundImage: `url(${Jacket})`,
							backgroundPosition: "center",
							backgroundSize: "cover",
						}}
					></div>
				</div>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
					dignissimos magnam, consequatur cum vero accusantium itaque. Sunt
					error, vitae dolor minus itaque aperiam quam illo. Saepe maxime
					similique magni dolorum. Lorem ipsum, dolor sit amet consectetur
					adipisicing elit. Quis, vitae! Vitae ex voluptas animi porro
					repudiandae qui, in exercitationem esse iusto debitis accusantium
					neque cumque ratione recusandae aperiam inventore adipisci.
				</p>
			</section>

			<button className="btn btn--primary">start selling</button>
		</div>
	);
}

export default Page;
