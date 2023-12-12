import path from 'path';
import { promises as fs } from 'fs';

// to works on Vercel we need to remove next export on package.js

export default async function handler(req, res) {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), 'json');
  //Read the json data file data.json
  const fileContents = await fs.readFile(jsonDirectory + '/emailmarketing.json', 'utf8');
  //Return the content of the data file in json format
  res.status(200).json(fileContents);
}