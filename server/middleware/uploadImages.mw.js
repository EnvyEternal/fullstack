const multer = require('multer')
const path = require('path')
const file = require('../db/config/file.js')
const {staticPath} = require('../db/config/file.js')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(staticPath, '/images'));
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
    },
  });
  // "фильтр"
  
  REGEXP_MIMETYPES = /^image\/(gif|jpeg|jpg|png)/;
  function filterFiles(req, file, cb) {
    //if (file.mimetype === '/image/jpg') {
    //  cb(null, false);
    //}
    cb(null, REGEXP_MIMETYPES.test(file.mimetype));
  }
  
  const upload = multer({ storage: storage, fileFilter: filterFiles });
  
  module.exports = upload;