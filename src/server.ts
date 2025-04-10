import express, { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port: number = 3000;

app.get('/listings', (req: Request, res: Response) => {
  
  try {
    const listingsData = fs.readFileSync(path.join(__dirname, 'assets/listings.json'), 'utf8');
    res.json(JSON.parse(listingsData));
  } catch (error) {
    console.error('Error reading listings file:', error);
    res.status(500).send('Error loading listings data');
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
}); 
