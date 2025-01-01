/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import httpStatus from 'http-status'
import AppError from '../../errors/AppError'
import { User } from '../user/user.model'
import { TLoginUser } from './auth.interface'
import config from '../../config'
import { createToken } from './auth.utils'
import jwt, { JwtPayload } from 'jsonwebtoken'

const logInUser = async (payload: TLoginUser) => {
  // getting user from db
  const user = await User.isUserExistsByEmail(payload.email)

  // throwing error if no user found
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found!')
  }

  // chekcing if the user password is valid
  if (!(await User.isPasswordMatched(payload.password, user.password))) {
    throw new AppError(httpStatus.FORBIDDEN, 'Password mismatch!')
  }

  // create token and sent to the client
  const jwtPayload = {
    email: user.email,
    role: user.role as string,
  }

  // generating access token
  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  )

  // generating refresh token
  const refreshToken = createToken(
    jwtPayload,
    config.jwt_refresh_secret as string,
    config.jwt_refresh_expires_in as string,
  )

  return { accessToken, refreshToken, user }
}

const refreshToken = async (token: string) => {
  try {
    // Decode and verify the refresh token
    const decoded = jwt.verify(token, config.jwt_refresh_secret as string) as JwtPayload;

    // Extract email and validate user existence
    const { email } = decoded;
    const user = await User.findOne({ email });
    if (!user) {
      throw new AppError(httpStatus.NOT_FOUND, 'User not found!');
    }

    // Prepare payload and generate new access token
    const jwtPayload = {
      email: user.email,
      role: user.role as string,
    };

    const accessToken = createToken(
      jwtPayload,
      config.jwt_access_secret as string,
      config.jwt_access_expires_in as string,
    );

    return accessToken;
  } catch (err) {
    if (err instanceof jwt.JsonWebTokenError) {
      if (err.name === 'TokenExpiredError') {
        throw new AppError(httpStatus.BAD_REQUEST, 'Refresh token expired. Please log in again.');
      } else if (err.name === 'JsonWebTokenError') {
        throw new AppError(httpStatus.BAD_REQUEST, 'Invalid token provided.');
      }
    }

    // Generic error handling
    throw new AppError(httpStatus.INTERNAL_SERVER_ERROR, 'An error occurred during token validation.');
  }
}

export const AuthService = {
  logInUser,
  refreshToken
}
