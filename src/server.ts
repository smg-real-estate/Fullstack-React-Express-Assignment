import express from 'express';
import createRouter from 'express-file-routing';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port: number = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

await createRouter(app, {
  directory: path.join(__dirname, './routes')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
