import express, { Application } from 'express';
import cors from 'cors';
import globalErrorHandlers from './app/middlewares/globalErrorHandlers';
import routes from './app/routes';
const app: Application = express();

// middleware
app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// api routes
app.use('/api/v1', routes);

// tsting purpose
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {

// });

// global error handler
app.use(globalErrorHandlers);

export default app;
