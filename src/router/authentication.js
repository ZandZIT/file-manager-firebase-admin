import { register} from '../controllers/authentication.js'

// anonymous function
export default (router)=>{
    router.post('/auth/register', register)
}