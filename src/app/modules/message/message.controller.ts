import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { MessageServices } from "./message.services";
import { TMessage } from "./message.interface";

const sendMessage = catchAsync(async(req, res) =>{
    const result = await MessageServices.sendMessageIntoMail(req.body as TMessage);

     sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Message sent!',
        data: result,
      });
})

export const MessageController = {
    sendMessage
}