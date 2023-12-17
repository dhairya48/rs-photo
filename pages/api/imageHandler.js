import fs from 'fs';
import path from 'path';

export default function imagesHandler(req, res) {
  let folderName = req?.body?.folderName || ''
  console.log('FolderName : -------------------', req.body)

  const imagesDir = path.join(process.cwd(), 'public', `${folderName}`);
  try {
    const imageNames = fs.readdirSync(imagesDir);
    let imagesArr = []
    imageNames.map((imageName) => {
      imagesArr.push('../' + folderName + '/' + imageName)

    });
    res.send({ 'status': true, "message": 'images fetched successfully', data: imagesArr });
  } catch (error) {
    console.error('Error reading image directory:', error);
    res.send({ 'status': true, "message": 'images fetched successfully', data: error });
  }
};

