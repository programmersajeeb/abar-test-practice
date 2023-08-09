import { ZodError, ZodIssue } from 'zod';
import { IgenericErrorResponse } from '../interfaces/common';
import { IgenericErrorMessage } from '../interfaces/error';

const handleZodError = (error: ZodError): IgenericErrorResponse => {
  const errors: IgenericErrorMessage[] = error.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue?.message,
    };
  });
  const statusCode = 400;

  return {
    statusCode,
    message: 'Zod validation error',
    errorMessages: errors,
  };
};

export default handleZodError;
