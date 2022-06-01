import { React } from "react";
import Slider from "../../components/swiper/Slider";
import "./singleItem.scss";
import Item from "../../components/list-item/Item";

const SingleItem = () => {
	return (
		<div className="single-item-page">
			<div className="container--wrapper">
				<section className="container--slider">
					<Slider />
				</section>
				<div className="container--description">
					<section>
						<div className="item-desc">
							This is where we will put the text that will describe the item.
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Repudiandae eveniet debitis reiciendis qui dolor temporibus soluta
							quod adipisci. Adipisci, laborum sed doloremque aut velit quidem
							laudantium vel voluptatem repellat sequi. Lorem ipsum dolor, sit
							amet consectetur adipisicing elit. Odio praesentium fugiat quia
							commodi architecto eius pariatur. Molestias tempora accusamus amet
							commodi, assumenda accusantium corrupti nulla aut fuga,
							asperiores, iusto rem.
						</div>
					</section>
					<section>
						<div className={"item-details"}>
							<div className={"title"}>
								<h3>Product Specifications</h3>
							</div>
							<div className={"table-container"}>
								<table>
									<tbody>
										<tr>
											<td className="detail-name">Size</td>
											<td className="detail-value">36</td>
										</tr>
										<tr>
											<td className="detail-name">Color</td>
											<td className="detail-value">White</td>
										</tr>
										<tr>
											<td className="detail-name">Condition</td>
											<td className="">Like new</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</section>
				</div>
			</div>
			<section className="container--similar-items">
				<div className="similar-items">
					<div className="title">
						<h3>Similar Items</h3>
					</div>
					<div className={"similar-items-list"}>
						<Item />
						<Item />
						<Item />
						<Item />
						<Item />
					</div>
				</div>
			</section>
			<section className="container--buy">
				<div className={"buy"}>
					<div className="name-price">
						<h1 className="title">Item name</h1>
						<h1 className="price">kr. 100</h1>
					</div>
					<div className="button">
						<button>Add to bag</button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default SingleItem;
