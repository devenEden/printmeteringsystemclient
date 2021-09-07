import { getAuthToken } from "../helpers/authToken";
import appConfig from "../config.json";

const authorization = `Bearer ${getAuthToken()}`;

const errorResponseObject = {
  success: false,
  error: "Sorry there seems to be an internal server error",
  connectionError: true,
};
const apiRequests = {
  getRequest: async (url) => {
    try {
      const res = await fetch(`${appConfig.server_routes_url}${url}`, {
        headers: { authorization },
      });
      return res.json();
    } catch (error) {
      console.error(error);
      return errorResponseObject;
    }
  },
  postRequest: async (url, body) => {
    try {
      const res = await fetch(`${appConfig.server_routes_url}${url}`, {
        method: "POST",
        headers: { authorization, "content-type": "application/json" },
        body: JSON.stringify(body),
      });
      return res.json();
    } catch (error) {
      console.error(error);
      return errorResponseObject;
    }
  },
  putRequest: async (url, body) => {
    try {
      const res = await fetch(`${appConfig.server_routes_url}${url}`, {
        method: "PUT",
        headers: { authorization, "content-type": "application/json" },
        body: JSON.stringify(body),
      });
      return res.json();
    } catch (error) {
      console.error(error);
      return errorResponseObject;
    }
  },
  patchRequest: async (url, body) => {
    try {
      const res = await fetch(`${appConfig.server_routes_url}${url}`, {
        method: "PATCH",
        headers: { authorization, "content-type": "application/json" },
        body: JSON.stringify(body),
      });
      return res.json();
    } catch (error) {
      console.error(error);
      return errorResponseObject;
    }
  },
  deleteRequest: async (url) => {
    try {
      const res = await fetch(`${appConfig.server_routes_url}${url}`, {
        method: "DELETE",
        headers: { authorization },
      });
      return res.json();
    } catch (error) {
      console.error(error);
      return errorResponseObject;
    }
  },
};
export default apiRequests;
