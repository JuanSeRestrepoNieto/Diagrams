import axios from "axios";
import { AxiosConfigGet } from "./Axios.config";

export const get = async (url: string) => {
  try {
    const data = await axios.get(url, AxiosConfigGet);
    return data;
  }catch (error) {
    console.error(error);
  }
}