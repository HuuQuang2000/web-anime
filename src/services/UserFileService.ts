import {Axios} from "./config/Axios";
interface IUserFile {
    page: number;
    size: number;
    textSearch: string;
    userId?: number;
}
export default class UserFileService {
    public static getAllUserFiles(data: IUserFile) {
        return Axios.get('/user-files',data);
    }
}