import api from "../api/axios";
import { quoteResponseModel } from "../models/quoteResponseModel";

export async function getQuoteAxios() {
  return await api.get<quoteResponseModel>("api/v3/quotes");
}
