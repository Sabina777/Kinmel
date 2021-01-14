import express from "express";
import multer from "multer";
import path from "path"; //to get th extension name of the file

const router = express.Router();

//create storage using the multer
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

//define the checkfile function

function checkFileType(file, cb) {
  const fileTypes = /jpg|jpeg|png/;
  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = fileTypes.test(file.mimetype);
  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb("Images only");
  }
}
const upload = multer({
  storage,
  //filter the file i.e only upload the file that has the limited extensions jpg,png
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

//here upload is the middleware
router.post("/", upload.single("image"), (req, res) => {
  res.send(`/${req.file.path}`);
});
export default router;
