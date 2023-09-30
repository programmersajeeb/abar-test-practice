import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandlers from './app/middlewares/globalErrorHandlers';
import routes from './app/routes';
import httpStatus from 'http-status';
const app: Application = express();

// middleware
app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// api routes
app.use('/api/v1', routes);

// tsting purpose
app.get('/', (req: Request, res: Response) => {
  res.send('server start');
});

// global error handler
app.use(globalErrorHandlers);

// not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Api no route found',
    errorMessage: {
      path: req.originalUrl,
      message: 'Not found the desired route',
    },
  });
  next();
});

export default app;
