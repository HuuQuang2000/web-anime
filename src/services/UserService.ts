import {Axios} from "./config/Axios";

const getOneById = ({id} : any) => {
    return Axios.get(`/users/${id}`);
}

const UserService = {
    getOneById
}

export default  UserService;