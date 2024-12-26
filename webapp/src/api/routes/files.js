const express = require('express');
const multer = require('multer');
const router = express.Router();

// הגדרות אחסון לקבצים
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage });

// נתיב להעלאת קובץ
router.post('/upload', upload.single('file'), (req, res) => {
    res.json({ message: `File ${req.file.filename} uploaded successfully!` });
});

module.exports = router;