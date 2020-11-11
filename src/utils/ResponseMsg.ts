import { Service } from 'typedi';
import { Any, ResponseMessage } from 'types';

@Service()
export class ResponseMsg {
    public readonly Success: ResponseMessage = {
        success: true, message: 'Good'
    };

    public withData(msg: ResponseMessage, data: Any): ResponseMessage {
        const response = { ...msg };
        if (data) {
            response.data = data;
        }

        return response;
    }
}
