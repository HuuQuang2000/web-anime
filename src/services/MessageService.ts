import {Axios} from "./config/Axios";



const sendMessage = (payload: FormData) => {

    return Axios.post(`/message`,payload,{
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}

const MessageService = {
    sendMessage,
}

export default  MessageService;