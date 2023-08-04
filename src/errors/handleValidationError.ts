import mongoose from 'mongoose';
import { IgenericErrorMessage } from '../interfaces/error';
import { IgenericErrorResponse } from '../interfaces/common';

const handleValidationError = (
  error: mongoose.Error.ValidationError,
): IgenericErrorResponse => {
  const errors: IgenericErrorMessage[] = Object.values(error.errors).map(
    (el: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: el?.path,
        message: el?.message,
      };
    },
  );
  const statusCode = 400;
  return {
    statusCode,
    message: 'Validation error',
    errorMessages: errors,
  };
};

export default handleValidationError;
