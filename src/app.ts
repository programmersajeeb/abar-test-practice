import express, { Application } from 'express';
import cors from 'cors';
import globalErrorHandlers from './app/middlewares/globalErrorHandlers';
import { userRouter } from './app/modules/users/user.route';
const app: Application = express();

// middleware
app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// api routes
app.use('/api/v1/users', userRouter);

// tsting purpose
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   throw new ApiError(400, 'error hoise thela shamlao');
//   // next('error with next express');
// });

// global error handler
app.use(globalErrorHandlers);

export default app;
