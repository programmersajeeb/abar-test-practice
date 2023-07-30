import express, { Application, Request, Response } from 'express';
import cors from 'cors';
// import userService from './app/modules/users/user.service';
import router from './app/modules/users/user.route';
const app: Application = express();

// middleware
app.use(cors());

// api routes
app.use('/api/v1/users', router);

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req: Request, res: Response) => {
  // await userService.createUser({
  //   id: '23523',
  //   role: 'student',
  //   password: ';laskdjf',
  // });
  res.send('Hello World!');
});

export default app;
