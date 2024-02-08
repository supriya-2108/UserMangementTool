import { API_LINK } from "../utils/constants";
interface formData {
  email: string;
  username: string;
  password: string;
}
interface loginData {
  email: string;
  password: string;
}
export const SignUp = async (formEnteries: formData) => {
  try {
    const Response = await fetch(`${API_LINK}/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        formEnteries,
      }),
    });
    if (Response.status === 201) {
      const json = await Response.json();
      return json;
    } else return;
  } catch (error) {
    console.log("Error in fetch network requests", error);
    throw error;
  }
};

export const Login = async (loginDetails: loginData) => {
  try {
    const Response = await fetch(`${API_LINK}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        loginDetails,
      }),
    });
    if (Response.status === 201) {
      const json = await Response.json();
      return json;
    } else return;
  } catch (error) {
    console.log("Error in fetch network requests", error);
    throw error;
  }
};
