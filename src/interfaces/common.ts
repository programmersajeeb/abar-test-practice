import { IgenericErrorMessage } from './error';

export type IgenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IgenericErrorMessage[];
};

export type IGenericResponse<T> = {
  meta: {
    page: number;
    limit: number;
    total: number;
  };
  data: T;
};
