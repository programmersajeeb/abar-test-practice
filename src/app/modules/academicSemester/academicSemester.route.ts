import express from 'express';
// import { userController } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { academicSemesterValidation } from './academicSemester.validation';
const router = express.Router();

router.post(
  '/create-user',
  validateRequest(academicSemesterValidation.createAcademicSemesterZodSchema),
  //   userController.createUser,
);

export const userRouter = router;
