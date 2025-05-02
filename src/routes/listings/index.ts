import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const get = async (req: Request, res: Response): Promise<void> => {
  try {
    res.setHeader('content-type', 'application/json');
    const listingsPath = path.join(__dirname, 'assets/listings.json');
    const listingsData = fs.readFileSync(listingsPath, 'utf8');
    await res.send(listingsData);
  } catch (error) {
    console.error('Error reading listings file:', error);
    await res.status(500).send('Error loading listings data');
  }
}