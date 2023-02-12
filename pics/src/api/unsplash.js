import axios from "axios";

export default axios.create({
	baseURL: "https://api.unsplash.com",
	headers: {
		Authorization: "Client-ID dZg-Ncmb7ZoWsq1ZP45XAXg4414QvWtWFCbCbqTSra0",
	},
});
