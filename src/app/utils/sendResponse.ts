import { Response } from 'express'
import httpStatus from 'http-status'

type TResponse<T> = {
  statusCode: number
  success: boolean,
  totalDocument?: number,
  token?: {accessToken: string, refreshToken: string}
  message: string
  data: T
}
export function sendResponse<T>(
  res: Response,
  { statusCode, success, totalDocument, token, message, data }: TResponse<T>,
) {
  const responseData: TResponse<T> = {
    success,
    statusCode,
    totalDocument,
    message,
    data,
  }

  if (token) {
    responseData.token = token
  }

  if ((Array.isArray(data) && data?.length === 0) || !data) {
    responseData.data = (Array.isArray(data) ? [] : null) as T
    responseData.message = message ? message : 'No Data Found'
    responseData.statusCode = httpStatus.OK
    responseData.totalDocument = 0
    responseData.success = true
  }

  res.status(responseData.statusCode).json(responseData)
}
