import { deleteUser, } from '../controllers/user.js'

export default (router)=>{
    router.delete('/users/:id', deleteUser)
    // router.patch("/users/:id", isAuthenticated, isOwner, updateUser);

}