import {Axios} from "./config/Axios";

const createByOneUser = ({userId} : any) => {
    return Axios.post(`/room/createByOneUser`,{userId:userId});
}

const getRooms = (payload : filter) => {
    return Axios.get(`/room`,{
        textSearch: payload.textSearch,
        page: payload.page,
        size: payload.size
    });
}
interface filter{
    id?: string | undefined;
    textSearch?: string;
    page: number;
    size: number;
}

const getOneById = (payload : filter) => {
    return Axios.post(`/room/${payload.id}`,{
            textSearch: payload.textSearch,
            page: payload.page,
            size: payload.size
    });
}
const RoomService = {
    createByOneUser,
    getOneById,
    getRooms
}

export default RoomService;