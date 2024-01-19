import { getAuth } from "firebase-admin/auth";

export const getUserByEmail = (email) => {
    getAuth()
    .getUser(email)
    .then((userRecord) => {
      return userRecord.toJSON();
    })
    .catch((error) => {
      console.log("Error fetching user data:", error);
      return null;
    });
};


export const deleteUserById = (uid) => {
  getAuth()
    .deleteUser(uid)
    .then(() => {
      console.log(userRecord)
      return userRecord.toJSON();
    })
    .catch((error) => {
      console.log("Error deleting user:", error);
    });
  return null;
};
