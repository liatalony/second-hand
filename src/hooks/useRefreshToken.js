import axios from "../api/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
	const { setAuth } = useAuth();
	console.log("inside refresh");
	const refresh = async () => {
		const response = await axios.get("/users/refresh", {
			withCredentials: true
		});
		console.log(response.data.accessToken);
		setAuth(prev => {
			console.log(JSON.stringify(prev));
			console.log(response.data);
			return { ...prev, 
				role: response.data.role,
				accessToken: response.data.accessToken }
		});
		return response.data.accessToken;
	}
	return refresh;
};

export default useRefreshToken;