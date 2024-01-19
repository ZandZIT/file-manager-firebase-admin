import { getAuth } from "firebase-admin/auth";

export const deleteUser = async (req, res)=>{
    try{
        const {id} = req.params
        getAuth()
         .deleteUser(id)
         .then(() => {
           return res.status(200).end();
         })
         .catch((error) => {
            console.log("Error deleting user:", error);
            return res.sendStatus(500);
         });
    }catch(error){
        console.log(error)
        return res.sendStatus(500)
    }
}
