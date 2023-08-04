import { IgenericErrorMessage } from './error';

export type IgenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IgenericErrorMessage[];
};
