import { Auth, Payload } from '../models';
import _axios from './_axios';


export default class AuthService {

    login(payload : Payload): Promise<Auth | any> {
        return new Promise((resolve, reject) => {
            _axios.post("https://reqres.in/api/login", payload)
            .then(
                res => resolve(res.data  as Auth),
                err => reject(err)
            )
            .catch(err => reject(err))
        });
    }

}