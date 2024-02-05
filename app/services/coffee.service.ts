import { get } from "./axios/axios.service";

export const getCoffeeList = async () => {
  const response = await get("https://api.sampleapis.com/coffee/hot");
  const data = response?.data;

  return data ?? [];
}