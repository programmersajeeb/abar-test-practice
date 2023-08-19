import { NextFunction, Request, Response } from 'express';
import { academicSemesterService } from './academicSemester.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const createSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const academicSemesterData = req.body;
    const result = await academicSemesterService.createService(
      academicSemesterData,
    );

    next();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic semester is created',
      data: result,
    });
  },
);

export const academicSemesterController = {
  createSemester,
};
