const express = require('express');
const multer = require('multer');
const sharp = require('sharp');
const path = require('path');

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

app.use(express.static('public'));

app.post('/convert', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No image uploaded' });
    }

    const format = req.body.format?.toLowerCase();
    if (!['jpg', 'jpeg', 'png'].includes(format)) {
      return res.status(400).json({ error: 'Invalid format. Use jpg or png.' });
    }

    let pipeline = sharp(req.file.buffer);

    if (format === 'jpg' || format === 'jpeg') {
      pipeline = pipeline.jpeg({ quality: 90 });
      res.type('image/jpeg');
    } else if (format === 'png') {
      pipeline = pipeline.png();
      res.type('image/png');
    }

    const buffer = await pipeline.toBuffer();
    res.send(buffer);
  } catch (err) {
    console.error('Conversion error:', err);
    res.status(500).json({ error: 'Conversion failed' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Image converter running at http://localhost:${PORT}`);
});
