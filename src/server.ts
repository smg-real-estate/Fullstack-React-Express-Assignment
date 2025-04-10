import express, { Request, Response } from 'express';

const app = express();
const port: number = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Backend World');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
}); 
