import React from "react";

function Icons(props) {
	const IconList = props.icons;
	const Icons = IconList.map((icon) => (
		<li key={icon.id}>
			<div>{icon.iconName}</div>
			<img src={icon.iconImage.url} width={200} height={200} alt="" />
		</li>
	));

	return (
		<div>
			<ul>{Icons}</ul>
		</div>
	);
}

export default Icons;
