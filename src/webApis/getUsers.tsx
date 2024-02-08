import { Get_Users_API } from "../utils/constants";

export const getUsers = async (page_no: number) => {
  try {
    const response = await fetch(`${Get_Users_API}${page_no}`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log("Error in fetching data from api", error);
    throw error;
  }
};
