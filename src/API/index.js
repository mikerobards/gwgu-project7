class Helper {
	static baseURL() {
		return "https://api.foursquare.com/v2";
	}
	static auth() {
		const keys = {
			client_id: "GA3VKCI5IWBQQIILIG202I1FK34A1WFIRBIVHWOFKYMDQSPQ",
			client_secret: "OOPUMDBXVOEZ10CC4Y0GGAH3PIYL0HTFDFX3ILJFPI2SZIPL",
			v: "20180930"
		};
		return Object.keys(keys)
			.map(key => `${key}=${keys[key]}`)
			.join("&");
	}
	static urlBuilder(urlPrams) {
		if (!urlPrams) {
			return "";
		} else {
			return Object.keys(urlPrams)
				.map(key => `${key}=${urlPrams[key]}`)
				.join("&");
		}
	}
	static headers() {
		return {
			Accept: "application/json"
		};
	}
	static simpleFetch(endPoint, method, urlPrams) {
		let requestData = {
			method,
			headers: Helper.headers()
		};
		return fetch(`${Helper.baseURL()}${endPoint}?${Helper.auth()}&${Helper.urlBuilder(urlPrams)}`, requestData)
			.then(response => response.json());
	}
}

export default class foursquareAPI {
	static search(urlPrams) {
		return Helper.simpleFetch("/venues/search", "GET", urlPrams);
	}
	static getVenueDetail(VENUE_ID) {
		return Helper.simpleFetch(`/venues/${VENUE_ID}`, "GET");
	}
	static getVenuePhoto(VENUE_ID) {
		return Helper.simpleFetch(`/venues/${VENUE_ID}/photos`, "GET");
	}
}
