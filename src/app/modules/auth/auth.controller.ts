import httpStatus from 'http-status'
import { catchAsync } from '../../utils/catchAsync'
import { sendResponse } from '../../utils/sendResponse'
import { AuthService } from './auth.service'

const logInUser = catchAsync(async (req, res) => {
  const user = await AuthService.logInUser(req.body)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    token: {accessToken: user.accessToken, refreshToken: user.refreshToken},
    message: 'User logged in successfully',
    data: user.user,
  })
})

const refreshToken = catchAsync(async(req, res) => {
  const refreshToken =  req.headers.cookie;
  if (!refreshToken) {
    return sendResponse(res, {
      statusCode: httpStatus.UNAUTHORIZED,
      success: false,
      data: [],
      message: "Refresh token is missing!",
    });
  }
  const result = await AuthService.refreshToken(refreshToken);


  sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Access token retrieved successfully!",
      data: result,
    });
})


export const AuthController = {
  logInUser,
  refreshToken
}
