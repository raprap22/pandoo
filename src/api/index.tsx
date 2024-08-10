import { BASE_URL, ENDPOINT_API } from "@/utils/constants/path.constant";
import axios from "axios";

export const fetchDestinations = async () => {
  try {
    const response = await axios.get(`${BASE_URL}${ENDPOINT_API.PRODUCT}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching destinations:", error);
    throw error;
  }
};

export const fetchArticles = async () => {
    try {
      const response = await axios.get(`${BASE_URL}${ENDPOINT_API.ARTICLE}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching articles:", error);
      throw error;
    }
  };