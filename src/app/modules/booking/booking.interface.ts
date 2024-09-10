import { Types } from "mongoose";

export type TBooking = {
    date: string;
    startTime: string;
    endTime: string;
    user: Types.ObjectId;
    facility: string;
    payableAmount: number;
    isBooked: boolean;
}