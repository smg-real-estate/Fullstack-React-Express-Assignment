import fs from 'fs/promises';

// function to encode file data to base64 encoded string
export const base64Encode = async (filePath: string): Promise<string> => {
  // read binary data
  return fs.readFile(filePath, 'base64');
}