// // user-controller.js

import User from "../model/user-schema.js";

export const userSignup = async (req, resp) => {
  try {
    const exist = await User.findOne({ username: req.body.username });
    if (exist) {
      return resp.status(401).json({ message: "Username already exists" });
    }

    const user = req.body;
    const newUser = new User(user);
    await newUser.save();

    resp.status(200).json({ message: user });
  } catch (error) {
    resp.status(500).json({ message: error.message });
  }
};

export const userLogin = async (req, resp) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    let user = await User.findOne({ username: username, password: password });
    if (user) {
      return resp.status(200).json({ data: user });
    } else {
      return resp.status(401).json("Invalid credentials");
    }
  } catch (error) {
    resp.status(500).json("Error ", error.message);
  }
};
