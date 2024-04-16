import {Axios} from "./config/Axios";
interface ILogin {
    username: string;
    password: string;
}

export class AuthService {
    public static login(data: ILogin) {
        return Axios.post('/auth/login', data);
    }
    public static getProfile() {
        return Axios.get('/auth/profile');
    }
}
