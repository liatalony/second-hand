import React from "react";


function Dashboard() {
	// const [userID, setUserId] = useState(false);


	// useEffect(() => {
	// 	console.log("running");
	// 	getUserSession();
	// }, []);

	// function getRoles() {
	// fetch("http://localhost:3001")
	// 	.then(response => {
	// 		return response.text();
	// 	})
	// 	.then(data => {
	// 		setRoles(data);
	// 	});
	// }

	// 	function getUserSession() {
	// 		fetch("http://localhost:3001/session")
	// 	.then(response => {
	// 		return response.text();
	// 	})
	// 	.then(data => {
	// 		console.log(data);
	// 		if (!data=="") {
	// 			return <Navigate replace to={"login"}/>
	// 		}
	// 		setUserId(data);
	// 	});
	// }

	return (
		<div className="Dashboard">
			<h1>Dashboard</h1>
			{/* <p>{userID ? userID : "No one is connected"}</p> */}
		</div>
	);
}

export default Dashboard;
