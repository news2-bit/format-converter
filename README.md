# Image Format Converter

A simple web app to convert images between JPG and PNG formats on the fly.

## Features

- Upload any image (JPG, PNG, WebP, etc.)
- Select target format (JPG or PNG)
- Download converted image instantly
- No image storage - conversion happens in memory
- Clean, responsive UI

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

3. Open `http://localhost:3000` in your browser

## How it works

- **Frontend**: HTML form with file upload and format selector
- **Backend**: Express server using Sharp for fast image conversion
- **Download**: Converted image downloads automatically

## Technology

- Express.js - Web server
- Sharp - Image processing
- Multer - File upload handling
