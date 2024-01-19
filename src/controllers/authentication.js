// import { createUser, getUserByEmail } from '../db/user'
import { getUserByEmail } from "../db/user.js";
import { getAuth } from "firebase-admin/auth";

export const register = async(req, res) =>{
    try{
      const { email, password } = req.body;
      if (!email || !password) return res.sendStatus(401);

      const existingUser = getUserByEmail(email)
      if (existingUser) {
        return res.sendStatus(400);
      }

      getAuth()
      .createUser({
        email: email,
        password: password,
      })
      .then((user) => {
        return res.status(200).json(user).end();
      })
      .catch((error) => {
        console.log("Error creating new user:", error);
      });

      // const salt = random();
      // const user = await createUser({
      //   email,
      //   username,
      //   authentication: {
      //     salt,
      //     password: authentication(salt, password),
      //   },
      // });

      // return res.status(200).json(user).end();
    }catch(error){
        console.log(error)
        return res.sendStatus(500)
    }
}