import { post } from "../utils/request";

export const authenticate = async (email: string, password: string) => {
  try {
    const res = await post("/user_token", {
      auth: {
        email,
        password
      }
    });
    return res.data;
  } catch (error) {
        // return error.response && error.response.status === 404
        // ? "Wrong email/password"
        // : "Unknown error. Please try again";
  }
};