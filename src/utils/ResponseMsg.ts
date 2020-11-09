import { Service } from 'typedi';
import { Any, ResponseMessage } from 'types';

@Service()
export class ResponseMsg {
    public readonly Success: ResponseMessage = {
        success: true, message: 'Good'
    };

    public withData(msg: ResponseMessage, data: Any): ResponseMessage {
        if (data) {
            msg.data = data;
        }

        return msg;
    }
}
