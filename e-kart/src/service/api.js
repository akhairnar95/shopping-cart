// api.js

import axios from "axios";

const URL = "http://localhost:5000";

export const authenticateSignup = async (data) => {
  try {
    return await axios.post(`${URL}/signup`, data);
  } catch (error) {
    console.error("Error while calling signup API", error);
  }
};

export const authenticateLogin = async (data) => {
  try {
    return await axios.post(`${URL}/login`, data);
  } catch (error) {
    console.error("Error while calling login API", error);
    return error.response;
  }
};
