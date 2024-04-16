import {Axios} from "./config/Axios";

export class PhotoService {
    public static getOneById(id: string) {
        return Axios.get('/user-files/'+id);
    }
}