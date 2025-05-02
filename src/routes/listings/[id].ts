import fs from 'fs';
import { base64Encode } from 'helpers/imageSerializer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const get = async (req: Request, res: Response): Promise<void> => {
  try {
    const listingsPath = path.join(__dirname, 'assets/listings.json');
    const listingsData: Listing[] = JSON.parse(fs.readFileSync(listingsPath, 'utf8')) as unknown;

    res.json({
      id: req.params.id,
      ...listingsData.find((listing) => listing.id === req.params.id),
      images: listingsData.find((listing) => listing.id === req.params.id)
        .images.map((i) => base64Encode(path
          .join(__dirname, 'assets', i.substring(i.lastIndexOf('/')))
        ))
    });
  } catch (error) {
    console.error('Error reading listings file:', error);
    res.status(500).send('Error loading listings data');
  }
}